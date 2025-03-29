onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  const lyrics = [
    "",
    "I wanna be your vacuum cleaner",
    "Breathing in your dust",
    "I wanna be your Ford Cortina",
    "I will never rust",
    "If you like your coffee hot",
    "Let me be your coffee pot",
    "You call the shots, babe",
    "I just wanna be yours",
    "Secrets I have held in my heart",
    "Are harder to hide than I thought",
    "Maybe I just wanna be yours",
    "I wanna be yours, I wanna be yours",
    "Wanna be yours",
    "Wanna be yours",
    "Wanna be yours",
    "Let me be your leccy meter",
    "And I'll never run out",
    "Let me be the portable heater",
    "That you'll get cold without",
    "I wanna be your setting lotion (wanna be)",
    "Hold your hair in deep devotion (How deep?)",
    "At least as deep as the Pacific Ocean",
    "Now I wanna be yours",
    "Secrets I have held in my heart",
    "Are harder to hide than I thought",
    "Maybe I just wanna be yours",
    "I wanna be yours, I wanna be yours",
    "Wanna be yours",
    "Wanna be yours",
    "Wanna be yours",
    "Wanna be yours",
    "Wanna be yours",
    "Wanna be yours",
    "Wanna be yours",
    "Wanna be yours",
    "I wanna be your vacuum cleaner (wanna be yours)",
    "Breathing in your dust (wanna be yours)",
    "I wanna be your Ford Cortina (wanna be yours)",
    "I will never rust (wanna be yours)",
    "I just wanna be yours (wanna be yours)"
  ];
  
  const timings = [
    0, 17000, 21000, 25000, 29000, 32000, 36000, 40000, 42000, 46000, 50000,
    53000, 57000, 62000, 65000, 69000, 75000, 78000, 81000, 85000, 89000,
    92000, 96000, 99000, 102000, 107000, 110000, 114000, 119000, 123000, 126000, 
    129000, 133000, 137000, 140000, 144000, 146000, 149000, 153000, 157000, 160000,
    163000, 167000
  ];
  
  const lyricsElement = document.querySelector(".lyrics");
  
  function updateLyrics(index) {
    if (index < lyrics.length) {
      lyricsElement.textContent = lyrics[index];
      setTimeout(() => updateLyrics(index + 1), timings[index + 1] - timings[index]);
    } else {
      setTimeout(() => updateLyrics(0), 3000 + (timings[1] - timings[0])); // Loop kembali dengan jeda tambahan 3 detik
    }
  }
  
  updateLyrics(0);
  