export const slugify = (string) => {
    const a = 'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;';
    const b = 'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------';
    const p = new RegExp(a.split('').join('|'), 'g');
    return string.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(p, c => b.charAt(a.indexOf(c)))
        .replace(/&/g, '-and-')
        .replace(/[^\w\-():;]+/g, '')
        .replace(/-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
};

export const capitalize = (text) => {
    if (typeof text !== 'string') {
        return '';
    }
    return text.replace('_', ' ')
        .toLowerCase()
        .replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
};

export const rating = (value) => {
    return (Math.round(Number(value) * 2) / 2) / 2;
};