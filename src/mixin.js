/**
 * Created by programmist03 on 26.12.2018.
 */
import  {css} from 'styled-components';


const sizes = {
    desktop: 1200,
    laptop: 992,
    tablets: 768,
    phone: 576
}

// Iterate through the sizes and create a media template
export  const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] }px) {
      ${css(...args)}
    }  
  `
    return acc
}, {});
