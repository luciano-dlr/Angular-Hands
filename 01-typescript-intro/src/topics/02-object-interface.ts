

// const skills: string[] = ['bash','counter','healing' ];


interface  Character {
    name:string;
    hp:number;
    skills:string[];
    homeTown?:string;

}

const strider:Character = {
    name: 'strider',
    hp: 100,
    skills: ['bash', 'counter'],
    
}


strider.homeTown = 'Rivendell';

console.table(strider)


export {};