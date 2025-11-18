import { Singleton } from "./singleton-class";

function main () {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    console.log(s1 === s2);
    
}

main();