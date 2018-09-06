
export const referencesCheck = (thesis, references) => {

  const splitReferences = references.split("\n")
  const splitRef = splitReferences.map(reference => reference.split(/(\,|\.)/))
  console.log(splitRef)

  const missingReferences = [] 

  splitRef.map(element => {
    if (!thesis.includes(element[0])) {
      const missingRef = splitRef.indexOf(element)
      missingReferences.push(splitReferences[missingRef])
    }
  })
  return missingReferences
}
