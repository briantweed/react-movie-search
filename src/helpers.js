import {ADAPTOR} from "./constants";


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

export const apiCall = async (url) => {
    const response = await fetch(url);
    let text = await response.text();
    let json = text && text.length ? JSON.parse(text) : {};

    if (response.ok) {
        return json;
    } else {
        throw json.error;
    }
};

export const searchableYears = () => {
    const years = [''];
    const thisYear = new Date().getFullYear();
    for (let year = thisYear; year >= 1900; year--) {
        years.push(year.toString());
    }
    return years;
};


export const getMovieRatingOptions = () => {
    const options = [];
    for (let x = 1; x <= 10; x++) {
        const option = {};
        option.value = x.toString();
        option.label = x.toString();
        options.push(option);
    }
    return options;
};


export const getMovieTags = async () => {
    const {ApiAdaptor} = await import('./adaptors/' + ADAPTOR);
    const adaptor = new ApiAdaptor();
    return await adaptor.fetchMovieTags();
};