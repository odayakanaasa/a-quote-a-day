const quotes = [
  // JANUARY
  [
    // 1
    "There is no New Year that I know of. We, with our mind's passions and hopes, conceive the coming year and the year that has gone off.",
    // 2
    "Rest in Him who is ever the same in your heart and watch the parade of events in the stream of time.",
    // 3
    "A man firmly established in freedom is tranquil. His equipoise is never broken, even when he is investing his entire energies on the world outside for the service of mankind.",
    // 4
    "You must be ready to accept all things as natural, with quiet cheer."
  ]
]

quotes.forEach(
  (month, m) => month.forEach(
    (quote_of_the_day, d) => console.log(`${m+1}/${d+1}: ${quote_of_the_day}\n`)
  )
)

export default quotes