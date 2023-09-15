function introduction(name) {
    const message = `Hi, my name is ${name}.`;
    return message;
  }
  const myIntro = introduction("Aki");
console.log(myIntro);

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
    