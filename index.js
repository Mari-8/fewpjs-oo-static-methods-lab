class Formatter {
  static capitalize(str) {
    return str.charAt().toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]+/g, "")
  }

  static titleize(string) {
    let stringSplit = string.split(" ")
    let capString = []
    let doNotInclude = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    for (let i=0; i < stringSplit.length; i++) {
      if (doNotInclude.includes(stringSplit[i])) {
        let el = stringSplit[i]
        capString.push(el)
      } else {
        let elem = this.capitalize(stringSplit[i])
        capString.push(elem)
      }
    }
    return this.capitalize(capString.join(" "))
    
  }
}

