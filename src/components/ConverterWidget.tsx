import { useState } from 'react';
import FormHex from './FormHex'
import hexToRGB from './hexToRgb';
import isHex from './isHex';
import { converterFunc } from './types/converterFunc';

export default function ConverterWidget(): JSX.Element {
    const [{color, text}, changeColor] = useState({ color: 'white', text: 'RGB...' });

    const converter: converterFunc = ({ target })=> {
        if (target.value.length < 7) {
            changeColor(() => ({color: 'white', text: 'RGB...'}))
            return;
        }

        if (isHex(target.value)) {
            const rgb =  hexToRGB(target.value);
            changeColor(() => ({color: rgb, text: rgb}));
        } else {
            changeColor(() => ({color: 'red', text: 'Ошибка'}));
        }

        return;
    }

    return (
        <div style={{backgroundColor: color}} className="color_view">
            <div className="converter_box">
                <FormHex converter={converter}/>
                <div className="view_rgb">
                    <span className="rgb_code">{text}</span>
                </div>
            </div>
        </div>
    )
}
