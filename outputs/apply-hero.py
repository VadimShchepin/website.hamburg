# -*- coding: utf-8 -*-
"""Wandelt den Text-Hero einer Leistungsseite in einen Split-Hero mit Blickfang-Bild."""
import re
import sys

TEXT_START = '<p className="section-kicker animate-up">'
TEXT_END = '<ServiceMeta />'


def apply(path, img, alt):
    src = open(path, encoding='utf-8').read()
    if 'subpage-hero-split' in src:
        print('skip (already split):', path)
        return
    i = src.index(TEXT_START)
    j = src.index(TEXT_END, i) + len(TEXT_END)
    block = src[i:j]
    # Blocktext um eine Ebene (4 Leerzeichen) tiefer einruecken
    indented = '\n'.join(('    ' + ln if ln.strip() else ln) for ln in block.split('\n'))
    new = (
        '<div className="subpage-hero-split">\n'
        '                        <div>\n'
        '                        ' + indented.lstrip() + '\n'
        '                        </div>\n'
        '                        <div className="subpage-hero-media animate-up">\n'
        f'                            <img src="{img}" alt="{alt}" width="1200" height="900" />\n'
        '                        </div>\n'
        '                    </div>'
    )
    open(path, 'w', encoding='utf-8').write(src[:i] + new + src[j:])
    print('hero applied:', path)


if __name__ == '__main__':
    apply(sys.argv[1], sys.argv[2], sys.argv[3])
