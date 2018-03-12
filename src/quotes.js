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
    "You must be ready to accept all things as natural, with quiet cheer.",
    // 5
    "Do not believe it is possible to be wedded to worldly life and yet be an ascetic.",
    // 6
    "The tragedy of human history is decreasing happiness in the midst of increasing comfort.",
    // 7
    "A man of integrity is accepted, believed, trusted and befriended by all.",
    // 8
    "A well trained and controlled mind stands a man in good stead, better than armies. It saves him from cowardice as well as perils.",
    // 9
    "The cultured give happiness wherever they go; the uncultured, whenever they go!",
    // 10
    "The spirit of advaita is not to keep away from anything, but to keep in tune with everything.",
    // 11
    "Don't put the key to your happiness in someone else's pocket.",
    // 12
    "Lives of great men, their deeds and words always stimulate and ennoble our mental life.",
    // 13
    "Everybody exists. It is only the few who live. To live, you should have an ideal.",
    // 14
    "The greatness is not in what we do, but unavoidably it is always in how we do what we do.",
    // 15
    "Fools give up the loin-cloth and other externals, but do not reject that whose rejection alone really matters.",
    // 16
    "When opportunity knocks, we are either out or sleeping in.",
    // 17
    "It takes two to make a quarrel. Also it takes two to make up after a quarrel. Without invoking love, this can never be accomplished.",
    // 18
    "'End the mind and remain great' is the thunderous bidding from every corner in the Hall of Vedanta",
    // 19
    "To give love is true freedom; to demand love is pure slavery.",
    // 20
    "Advaita is possible only in feeling and not in action.",
    // 21
    "No one, while steeped in sensuous pleasures, can ever find abidance in Brahman. Can lotuses ever grow on rocks or hair on tortoise shells?",
    // 22
    "Continuous change alone is the changeless flaw.",
    // 23
    "Death connotes not only the condition of the body when life has ebbed out from it, but includes the very principle of change and finitude.",
    // 24
    "The subject of dhyana must ultimately come to find its identity with the object of dhyana.",
    // 25
    "All learned people admit that the paramount duty of a sannyasin who has renounced the world is the uninterrupted practice of spiritual discipline, which alone leads to moksa.",
    // 26
    "Renunciation is the only way to perfection. Even a little renunciation is rewarded with immense blessings. Renounce! Renounce!!",
    // 27
    "Grief is the state of mind created by the absence of objects of one's liking.",
    // 28
    "Restlessness of the mind and unsteadiness of character are reflected in the physical movements of an intelligent being.",
    // 29
    "Who is a friend? He who comes to you with love and cheer when all others have left you is a true friend.",
    // 30
    "A true friend is discovered not by searching outside for a right person to befriend, but by your growing to be the right person to deserve a friend.",
    // 31
    "You are never away from Him. You are in Him, with Him, at Him. You are Him alone."
  ],
  // FEBRUARY 
  [
    // 1 (skipped a few beginning words on the page)
    "Young men never care to listen to advice. This is their nature. Nobody needs to curse them for it. Yet when they once trip and fall, they learn for themselves. A serious scare is always worth more to a teenager than any amount of advice.",
    // 2
    "Actions are the louder expression of thought. The quality of thought is ordered by the nature of our inner belief and faith.",
    // 3
    "Any activity undertaken by a perfect Master does not and cannot bring about any consequences, good or evil, upon Him. He is only a divine instrument.",
    // 4
    "It is a matter of common experience that the knowledge of a subject by itself will not enable a person to act always according to it.",
    // 5
    "Meet life as it reaches you. With or without the things our minds demand, life can be a brilliant success. But, for this, we must discover something else to depend upon. Seek that something within yourself, not outside.",
    // 6
    "Man becomes high or low according to his deeds.",
    // 7
    "The contents of the present moment, divorced from all relationships with the past and future, is the absolute fullness of the Infinite.",
    // 8
    "Carefully navigate around the dangerous rocks of thy own lower nature. Thou shall reach the eternal heaven of peace and bliss — Truth.",
    // 9
    "Mind at rest is the temple joy. So long as it is gurgling with its desires, passions and attachments in its stormy surface, the signature of joy gets ruffled out.",
    // 10
    "In life, the glory lies not in the quarry, but in the chase. The success is not in the trophy won but in the race run.",
    // 11
    "Comfort comes as a guest, lingers to become the host, and stays to enslave us.",
    // 12
    "To be patient means to suffer something that hinders or hurts us, and still retain our self-composure. How many difficulties, with their consequent unpleasantness and discord, could be smoothed over and almost entirely eliminated by patience. Patience always elevates and strengthens our character. We need patience not only with others, but also with ourselves."
  ]
]

quotes.forEach(
  (month, m) => month.forEach(
    (quote_of_the_day, d) => console.log(`${m+1}/${d+1}: ${quote_of_the_day}\n`)
  )
)

export default quotes