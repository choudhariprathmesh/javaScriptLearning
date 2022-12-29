var word = "HardWorkAlwaysPaysBack";
var tlength =word.length;
console.log("word Length",tlength);
for (let i = 0; i < tlength; i++) {
    if ((i%2!=0)) {
        console.log(word.charAt(i));
    }
}