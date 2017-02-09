/**
 * Created by Simon on 24/12/2016.
 */

import P from '../parsec/parser';
import stream from '../../lib/stream/index';
import textParser from './text-parser';
import T from '../../lib/standard/token';




function stop(){
    return F.eos.or(C.charIn('\n*`'));
}

function pureText(){
    return F.not(stop()).rep()
        .map(characters=>characters.join(''))
}

function formattedSequence(){
    return textParser.formattedSequence(pureText(), stop());
}

function bulletLv1(){
    return C.char('\n').optrep()
        .then(C.charIn('*-'))  //first character of a bullet is  * or -
        .then(C.charIn(' \u00A0'))  // second character of a bullet is space or non-breakable space
        .thenRight(formattedSequence())
        .map(someText => ({bullet:{level:1, content: someText }}  ))
}

function bulletLv2(){
    return C.char('\n').optrep()
        .then(T.fourSpacesBlock())
        .then(C.char(' ').optrep())  //careful. This will accept 8 space. therefore the code-parser must have higher priority
        .then(C.charIn('*-'))       //first character of a bullet is  * or -
        .then(C.charIn(' \u00A0'))  // second character of a bullet is space or non-breakable space
        .thenRight(formattedSequence())
        .map(someText => ({bullet:{level:2, content: someText }}  ))
}

function bullet(){
    return F.try(bulletLv2())
        .or(bulletLv1())
}

function parseBullet( line, offset=0){
    return bullet().parse(stream.ofString(line), offset)
}

export default {
    bullet,

    parse(line){
        return parseBullet(line,0);
    }
}
