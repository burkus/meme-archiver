

export default class Meme {
    constructor(path) {
        this.path = path;
        this.name = getNameFromPath(path);
    }
}


function getNameFromPath(name: string) {
    let last = name.lastIndexOf('/');
    if(last === null) {
        last = name.lastIndexOf('\\');
    }

    if(last === -1) {
        return 'Name could not be found';
    }

    const fileExt = name.lastIndexOf('.');

    if(fileExt !== -1) {
        return name.substring(last + 1, fileExt);
    }
   
    return name.substr(last + 1);
}