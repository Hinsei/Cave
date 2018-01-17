import about from  "../markdown/about.md" 

export default function Store(filename) {
  var files 
  files =
    {
      "About": about
    }

  return files[filename]
}
