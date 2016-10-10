export default function (str, index) {
    return `i${index === undefined ? '' : index}-${str.replace(/\W/g, '')}`;
}
