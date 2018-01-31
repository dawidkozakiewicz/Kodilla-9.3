var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var dinosaur = 'triceratops';

dinosaur = dinosaur.toUpperCase();

text = text.replace('Velociraptor', dinosaur);

text = text.substring(0, text.length/2);

console.log(text);
