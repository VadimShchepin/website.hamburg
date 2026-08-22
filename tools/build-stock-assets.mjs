#!/usr/bin/env node
/**
 * Fetch the licensed Freepik/Magnific stock renders and write them out as
 * cropped, size-capped WebP into public/. Crop uses sharp's attention strategy
 * so faces and subjects survive the aggressive band aspect ratios.
 */
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

const ASSETS = [
    // --- Anwaelte -----------------------------------------------------------
    { out: 'public/leistungen/branchen/anwaelte/kanzlei.webp', w: 1200, h: 900,
      url: 'https://downloadscdn6.magnific.com/590464/508/507923.jpg?filename=mature-businessman-portrait-with-window-office-corporate-management-business-lawyer-career-attorney-serious-man-executive-company-ceo-with-law-firm-boardroom-legal-advice.jpg&token=exp=1787434446~hmac=acab4a50fe8842739a11e8acbc71e8c7' },
    { out: 'public/leistungen/branchen/anwaelte/erstgespraech.webp', w: 1200, h: 900,
      url: 'https://downloadscdn6.magnific.com/656932/6/5861.jpg?filename=businessmen-sitting-desk-headed-by-middle-aged-serious-concentrated-female-eyeglasses-checking-agreement-document-before-signing-it-financial-director-ready-affirm-official-paper-with-signature.jpg&token=exp=1787434456~hmac=dfdc9e9515cf0d802fd5316f7e53ffe4' },
    { out: 'public/leistungen/branchen/anwaelte/mandat.webp', w: 1800, h: 760,
      url: 'https://downloadscdn6.magnific.com/663268/2/1911.jpg?filename=businessman-dark-blue-tshirt-analyzing-document-desk-closeup-professional-auditor-lawyer-reviewing-lengthy-paper-report-office-setting-business-people-concept.jpg&token=exp=1787434457~hmac=ee19fe4fcd74e79f3513089e761ed766' },

    // --- Steuerberater ------------------------------------------------------
    { out: 'public/leistungen/branchen/steuerberater/kanzlei.webp', w: 1200, h: 900,
      url: 'https://downloadscdn6.magnific.com/590464/520/519584.jpg?filename=computer-documents-feedback-with-business-people-office-together-collaboration-training-coaching-learning-management-with-mentor-man-woman-employee-work-development.jpg&token=exp=1787434458~hmac=454a9e5769de962977b794878ac42eca' },
    { out: 'public/leistungen/branchen/steuerberater/mandat.webp', w: 1200, h: 900,
      url: 'https://downloadscdn6.magnific.com/31965/174/173987.jpg?filename=corporate-auditor-calculating-budget-with-calculator-his-office-desk-insight.jpg&token=exp=1787434459~hmac=be495bd722f0ee773baa456dc61ce292' },
    { out: 'public/leistungen/branchen/steuerberater/schreibtisch.webp', w: 1800, h: 760,
      url: 'https://downloadscdn6.magnific.com/780608/12/11620.jpg?filename=top-view-talking-colleagues-office-white-desk.jpg&token=exp=1787434460~hmac=ba36baea7d2d14a7bfa6a4c13406d945' },

    // --- Gastronomie --------------------------------------------------------
    { out: 'public/leistungen/branchen/gastronomie/gastraum.webp', w: 1200, h: 900,
      url: 'https://downloadscdn6.magnific.com/1339860/2/1948.jpg?filename=group-people-eating-restaurant-busy-traditional-english-pub.jpg&token=exp=1787434461~hmac=277ab32e91ff79f8c2a03c58b0f1c712' },
    { out: 'public/leistungen/branchen/gastronomie/speisekarte.webp', w: 1200, h: 900,
      url: 'https://downloadscdn6.magnific.com/684453/1/67.jpg?filename=gastronomic-photography-restaurant-food-wine-business-product-plate-food.jpg&token=exp=1787434462~hmac=6a35c5bce5953bc30f161a512d62f61d' },
    { out: 'public/leistungen/branchen/gastronomie/abendgeschaeft.webp', w: 1800, h: 760,
      url: 'https://downloadscdn6.magnific.com/1339901/14/13319.jpg?filename=young-multiracial-group-friends-casual-clothing-smiling-around-table-restaurant.jpg&token=exp=1787434463~hmac=14bffe74774d8a20b8613a0b3c4f0ce7' },

    // --- Hotels -------------------------------------------------------------
    { out: 'public/leistungen/branchen/hotels/zimmer.webp', w: 1200, h: 900,
      url: 'https://downloadscdn6.magnific.com/664434/5/4593.jpg?filename=hotel.jpg&token=exp=1787434477~hmac=83475227ed538410e21dbe6e22fcaa44' },
    { out: 'public/leistungen/branchen/hotels/buchung.webp', w: 1200, h: 900,
      url: 'https://downloadscdn6.magnific.com/519356/3/2481.jpg?filename=shot-concentrated-beautiful-businesswoman-working-with-her-laptop-desk-hotel-room.jpg&token=exp=1787434478~hmac=aab0c4255c931d5388ee033a1a0ad3c2' },
    { out: 'public/leistungen/branchen/hotels/suite.webp', w: 1800, h: 760,
      url: 'https://downloadscdn6.magnific.com/657074/3/2622.jpg?filename=large-bedroom-with-wooden-floor-large-bed.jpg&token=exp=1787434479~hmac=9ac3981d9d9aa1f919599ab0d9216be7' },

    // --- Immobilienmakler ---------------------------------------------------
    { out: 'public/leistungen/branchen/makler/besichtigung.webp', w: 1200, h: 900,
      url: 'https://downloadscdn6.magnific.com/1218270/7/6525.jpg?filename=female-realtor-showing-couple-interested-buying-around-house.jpg&token=exp=1787434479~hmac=f2589755a13aa960a285ae43219fcd10' },
    { out: 'public/leistungen/branchen/makler/objekt.webp', w: 1200, h: 900,
      url: 'https://downloadscdn6.magnific.com/495423/62/61454.jpg?filename=female-real-estate-agent-working-with-couple-room.jpg&token=exp=1787434480~hmac=43532e250cc3b8733051a1aefef8272d' },
    { out: 'public/leistungen/branchen/makler/hamburg.webp', w: 1800, h: 760,
      url: 'https://downloadscdn6.magnific.com/1164169/2/1139.jpg?filename=city-warehouses-speicherstadt-district-kehrwiederspitze-hamburg-city-germany.jpg&token=exp=1787434481~hmac=564d8fae7aaf847f0cba557e552a8402' },

    // --- Wissen: SEO-Kosten Hamburg ----------------------------------------
    { out: 'public/wissen/fotos/seo-kosten-hamburg.webp', w: 1200, h: 900,
      url: 'https://downloadscdn6.magnific.com/181624/5/4335.jpg?filename=body-water-brown-concrete-buildings-hamburg-germany-daytime.jpg&token=exp=1787434482~hmac=db1fa050334c8c7c36c73dce92c3f037' },
    { out: 'public/wissen/fotos/seo-kosten-budget.webp', w: 1600, h: 900,
      url: 'https://downloadscdn6.magnific.com/670147/47/46814.jpg?filename=business-graphs-laptop-screen-cup-coffee-other-accessories-sunny-office.jpg&token=exp=1787434483~hmac=c5134eaeddc3ea6f565a7880197a1a89' },

    // --- Wissen: Google-Unternehmensprofil ---------------------------------
    { out: 'public/wissen/fotos/gbp-maps.webp', w: 1200, h: 900,
      url: 'https://downloadscdn6.magnific.com/665346/47/46870.jpg?filename=woman-hand-with-smartphone-searching-map-city-restaurants-places-interest-pub.jpg&token=exp=1787434484~hmac=a3667a3062fabd855145357231913742' },
    { out: 'public/wissen/fotos/gbp-unterwegs.webp', w: 1600, h: 900,
      url: 'https://downloadscdn6.magnific.com/590464/214/213237.jpg?filename=phone-hand-man-typing-street-contact-location-with-navigation-network-social-media-smartphone-person-male-online-app-directions-guide-with-internet-city-outdoor.jpg&token=exp=1787434490~hmac=09bba22a81b20ef75ca37907dc8ea226' },

    // --- Wissen: Agentur oder Freelancer -----------------------------------
    { out: 'public/wissen/fotos/freelancer-hero.webp', w: 1200, h: 900,
      url: 'https://downloadscdn6.magnific.com/1160871/17/16907.jpg?filename=serene-home-office-bathed-sunlight-with-focused-individual-work-amidst-cozy-surroundings.jpg&token=exp=1787434491~hmac=b3ab9f87e73a652c92beca07374f9cc3' },
    { out: 'public/wissen/fotos/freelancer-schreibtisch.webp', w: 1000, h: 750,
      url: 'https://downloadscdn6.magnific.com/1110022/1/669.jpg?filename=person-working-desk-with-computer-surrounded-by-plants-enjoying-bright-inviting-workspace.jpg&token=exp=1787434492~hmac=6638afac68cb782ef7adf02015208dd1' },
    { out: 'public/wissen/fotos/agentur-team.webp', w: 1000, h: 750,
      url: 'https://downloadscdn6.magnific.com/590464/474/473357.jpg?filename=business-people-whiteboard-sticky-note-brainstorming-presentation-collaboration-office-creative-agency-board-post-it-project-management-teamwork-workshop-with-diversity.jpg&token=exp=1787434493~hmac=48597a09b76719ef96091b383828e9f3' },

    // --- Wissen: Baukasten oder eigene Website -----------------------------
    { out: 'public/wissen/fotos/baukasten-hero.webp', w: 1200, h: 900,
      url: 'https://downloadscdn6.magnific.com/13339/258/257273.jpg?filename=graphic-artist-using-graphics-tablet.jpg&token=exp=1787434494~hmac=bd67fc56a250fa25df819caae532b1c1' },
    { out: 'public/wissen/fotos/baukasten-eigenbau.webp', w: 1600, h: 900,
      url: 'https://downloadscdn6.magnific.com/482257/89/88541.jpg?filename=top-down-view-remote-worker-typing-code-personal-office.jpg&token=exp=1787434495~hmac=683ffe79df40d2357c9a9276ac07429e' },

    // --- Wissen: Website nicht bei Google gefunden -------------------------
    { out: 'public/wissen/fotos/indexierung-hero.webp', w: 1200, h: 900,
      url: 'https://downloadscdn6.magnific.com/590464/459/458724.jpg?filename=man-programmer-night-with-computer-thinking-stress-glitch-screen-coding-error-person-developer-pc-with-monitor-reading-information-technology-with-problem-solving-web.jpg&token=exp=1787434495~hmac=b8ccb24d8c20ecc180e43efbf0464860' },
    { out: 'public/wissen/fotos/indexierung-pruefen.webp', w: 1600, h: 900,
      url: 'https://downloadscdn6.magnific.com/236854/58/57559.jpg?filename=top-view-man-typing-computer-keyboard-writing-code.jpg&token=exp=1787434496~hmac=b3998e4142c290b0b53b5329f5c4d276' },
];

let failed = 0;
for (const asset of ASSETS) {
    try {
        const res = await fetch(asset.url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const src = Buffer.from(await res.arrayBuffer());
        const meta = await sharp(src).metadata();
        await mkdir(dirname(asset.out), { recursive: true });
        const out = await sharp(src)
            .resize(asset.w, asset.h, { fit: 'cover', position: sharp.strategy.attention })
            .webp({ quality: 80, effort: 6 })
            .toBuffer();
        await writeFile(asset.out, out);
        console.log(`ok   ${asset.out}  ${meta.width}x${meta.height} -> ${asset.w}x${asset.h}  ${(out.length / 1024).toFixed(0)} KB`);
    } catch (err) {
        failed++;
        console.error(`FAIL ${asset.out}: ${err.message}`);
    }
}
console.log(failed ? `\n${failed} asset(s) failed` : `\nall ${ASSETS.length} assets written`);
