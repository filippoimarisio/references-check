export const referencesCheck = (thesis, references) => {
  const splitReferences = references.split("\n")
  // console.log(splitReferences)

  const splitRef = splitReferences.map(reference => reference.split(/(\,|\.)/))
  console.log(splitRef)

  splitRef.map(element => {
    if (!thesis.includes(element[0])) {
      const missingRef = splitRef.indexOf(element)
      console.log(splitReferences[missingRef])
    }
  })

}
