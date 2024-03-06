<template>
    <div class="about-template">
        <AtomsPageTitle text="About " strong="Studio Ghibli"/>
        <div class="articles-grid">
        <MoleculesBoxArticle
          v-for="article in articles"
          :key="article.title"
          :title="article.title"
          :text="article.text"
        />
        </div>
        <div class="criadores-grid">
        <img src="../../about/Hayao_Miyazaki.jpg" alt="Hayao_Miyazaki" class="criadores"/>
        <img src="../../about/Toshio_Suzuki.jpg" alt="Toshio_Suzuki" class="criadores"/>
        <img src="../../about/Isao_Takahata.jpg" alt="Isao_Takahata" class="criadores"/>
        <AtomsPageTitle text="宮崎 駿" strong="Hayao Miyazaki"/>
        <AtomsPageTitle text="鈴木 敏夫" strong="Toshio Suzuki"/>
        <AtomsPageTitle text="高畑 勲" strong="Isao Takahata"/>
        </div>
    </div>
</template>

<script setup lang="ts">
  const articles = reactive([
  {
    title: "What is Studio Ghibli?",
    text: "Studio Ghibli, Inc. (Japanese: 株式会社スタジオジブリ, Hepburn: Kabushiki-gaisha Sutajio Jiburi) is a Japanese animation studio based in Koganei, Tokyo. It has a strong presence in the animation industry and has expanded its portfolio to include various media formats, such as short subjects, television commercials, and two television films. Their work has been well-received by audiences and recognized with numerous awards. Their mascot and most recognizable symbol, the character Totoro from the 1988 film My Neighbor Totoro, is a giant spirit inspired by raccoon dogs (tanuki) and cats (neko). Among the studio's highest-grossing films are Princess Mononoke (1997), Spirited Away (2001), Howl's Moving Castle (2004), and Ponyo (2008). Studio Ghibli was founded on June 15, 1985, by the directors Hayao Miyazaki and Isao Takahata and producer Toshio Suzuki, after acquiring Topcraft's assets. The studio has also collaborated with video game studios on the visual development of several games. \n\nFive of the studio's films are among the ten highest-grossing anime feature films made in Japan. Spirited Away is second, grossing 31.68 billion yen in Japan and over US$380 million worldwide, and Princess Mononoke is fourth, grossing 20.18 billion yen. Three of their films have won the Animage Grand Prix award, four have won the Japan Academy Prize for Animation of the Year, and five have received Academy Award nominations. Spirited Away won the 2002 Golden Bear and the 2003 Academy Award for Best Animated Feature. The Boy and the Heron (2023) won the Golden Globe Award for Best Animated Feature Film and the BAFTA Award for Best Animated Film."
  },
  {
    title:"Name",
    text:"The name 'Ghibli' was chosen by Miyazaki from the Italian noun ghibli (also used in English), an Italianization of the Libyan Arabic name for a hot desert wind (قبلي ghiblī) and nickname of the Italian Caproni Ca.309 aircraft. The name was chosen by Miyazaki due to his passion for aircraft and also for the idea that the studio would 'blow a new wind through the anime industry'. Although the Italian word would be more accurately transliterated as 'Giburi' (ギブリ), with a hard g sound, the studio's name is written in Japanese as Jiburi (ジブリ)"
  },
  {
    title:"Tokuma Shoten era",
    text:"Founded on June 15, 1985, Studio Ghibli was headed by directors Hayao Miyazaki and Isao Takahata and producer Toshio Suzuki. Miyazaki and Takahata had already had long careers in Japanese film and television animation and had worked together on The Great Adventure of Horus, Prince of the Sun in 1968 and the Panda! Go, Panda! films in 1972 and 1973. Suzuki had been an editor at Tokuma Shoten's Animage manga magazine.\n\nThe studio was founded after the success of the 1984 film Nausicaä of the Valley of the Wind. Suzuki was part of the film's production team, and founded Studio Ghibli with Miyazaki, who also invited Takahata to join them.\n\nThe studio has mainly produced films by Miyazaki, with the second most prolific director being Takahata (most notably with Grave of the Fireflies). Other directors who have worked with Studio Ghibli include Yoshifumi Kondō, Hiroyuki Morita, Gorō Miyazaki, and Hiromasa Yonebayashi. Composer Joe Hisaishi has provided the soundtracks for most of Miyazaki's Studio Ghibli films. In their book Anime Classics Zettai!, Brian Camp and Julie Davis made note of Michiyo Yasuda as 'a mainstay of Studio Ghibli's extraordinary design and production team'. At one time the studio was based in Kichijōji, Musashino, Tokyo.\n\nIn August 1996, The Walt Disney Company and Tokuma Shoten formed a partnership wherein Walt Disney Studios would be the sole international distributor for Tokuma Shoten's Studio Ghibli animated films. Under this agreement, Disney also agreed to finance 10% of the studio's production costs. Since then, all three of the aforementioned films by Miyazaki at Studio Ghibli that were previously dubbed by Streamline Pictures have been re-dubbed by Disney. On June 1, 1997, Tokuma Shoten Publishing consolidated its media operations by merging Studio Ghibli, Tokuma Shoten Intermedia software and Tokuma International under one location.\n\nOver the years, there has been a close relationship between Studio Ghibli and the magazine Animage, which regularly runs exclusive articles on the studio and its members in a section titled 'Ghibli Notes'. Artwork from Ghibli's films and other works are frequently featured on the cover of the magazine. Saeko Himuro's novel Umi ga Kikoeru was serialised in the magazine and subsequently adapted into Ocean Waves, Studio Ghibli's first animated feature-length film created for television. It was directed by Tomomi Mochizuki.\n\nIn October 2001, the Ghibli Museum opened in Mitaka, Tokyo. It contains exhibits based on Studio Ghibli films and shows animations, including a number of short Studio Ghibli films not available elsewhere.\n\nThe studio is also known for its strict 'no-edits' policy in licensing their films abroad due to Nausicaä of the Valley of the Wind being heavily edited for the film's release in the United States as Warriors of the Wind."
  },
  {
    title:"Independent era",
    text:"Between 1999 and 2005, Studio Ghibli was a subsidiary brand of Tokuma Shoten; however, that partnership ended in April 2005, when Studio Ghibli was spun off from Tokuma Shoten and was re-established as an independent company with relocated headquarters.\n\nOn February 1, 2008, Toshio Suzuki stepped down from the position of Studio Ghibli president, which he had held since 2005, and Koji Hoshino (former president of Walt Disney Japan) took over. Suzuki said he wanted to improve films with his own hands as a producer, rather than demanding this from his employees. Suzuki decided to hand over the presidency to Hoshino because Hoshino has helped Studio Ghibli to sell its videos since 1996 and has also aided the release of the Princess Mononoke film in the United States. Suzuki still serves on the company's board of directors\n\nTakahata developed a project for release after Gorō Miyazaki's (director of Tales from Earthsea and Hayao's son) The Tale of the Princess Kaguya – an adaptation of The Tale of the Bamboo Cutter. The last film Hayao Miyazaki directed before retiring from feature films was The Wind Rises which is about the Mitsubishi A6M Zero and its creator.\n\nOn Sunday, September 1, 2013, Hayao Miyazaki held a press conference in Venice to confirm his retirement, saying: 'I know I've said I would retire many times in the past. Many of you must think, 'Once again.' But this time I am quite serious.'\n\nIn 2013, a documentary directed by Mami Sunada called The Kingdom of Dreams and Madness (Japanese: 夢と狂気の王国, Hepburn: Yume to kyōki no ōkoku) was created delving into the lives of those working at Studio Ghibli and the productions of the animated films The Wind Rises and The Tale of the Princess Kaguya, including storyboard sketching, inking, painting, and voice actor selection for the films.\n\nOn January 31, 2014, it was announced that Gorō Miyazaki will direct his first anime television series, Sanzoku no Musume Rōnya, an adaptation of Astrid Lindgren's Ronia the Robber's Daughter for NHK. The series is computer-animated, produced by Polygon Pictures, and co-produced by Studio Ghibli.\n\nIn March 2014, Toshio Suzuki retired as producer and assumed the new position of general manager. Yoshiaki Nishimura replaced Suzuki in the producer role.\n\nOn August 3, 2014, Toshio Suzuki announced that Studio Ghibli would take a 'brief pause' to re-evaluate and restructure in the wake of Miyazaki's retirement. He stated some concerns about where the company would go in the future. This led to speculation that Studio Ghibli will never produce another feature film again. On November 7, 2014, Miyazaki stated, 'That was not my intention, though. All I did was announce that I would be retiring and not making any more features.' Lead producer Yoshiaki Nishimura among several other staffers from Ghibli, such as director Hiromasa Yonebayashi, left to found Studio Ponoc in April 2015, working on the film Mary and the Witch's Flower.\n\nThe 2016 animated fantasy film The Red Turtle, directed and co-written by Dutch-British animator Michaël Dudok de Wit in his feature film debut, was a co-production between Studio Ghibli and Wild Bunch.\n\nIn February 2017, Toshio Suzuki announced that Hayao Miyazaki had come out of retirement to direct a new feature film with Studio Ghibli.\n\nOn November 28, 2017, Koji Hoshino stepped down as president; he was replaced by Kiyofumi Nakajima (former Ghibli Museum director). Hoshino was then appointed as Chairman of Studio Ghibli.\n\nIn May 2020, Toshio Suzuki confirmed that a new film from Gorō Miyazaki is in development at Studio Ghibli. On June 3, 2020, Studio Ghibli announced that the film would be an adaptation of the novel Earwig and the Witch by Diana Wynne Jones. The film was announced as the first full 3D CG animated Ghibli film and slated for a television premiere on NHK in late 2020. The company had a net income of ¥1.253 billion, and a total asset worth ¥24.521 billion by August 2021.\n\nOn November 1, 2022, the Studio Ghibli themed amusement park Ghibli Park opened.\n\nOn April 4, 2023, Koji Hoshino announced that he had stepped down as chairman, and would serve as a representative director before planning to exit Studio Ghibli completely during the company's annual general shareholder's meeting in June, one month prior to the release of director Hayao Miyazaki's final movie The Boy and the Heron on July 14. He also announced that Toshio Suzuki would be replacing Kiyofumi Nakajima as president of Studio Ghibli, assuming the role for the first time since 2008, while Nakajima would continue to serve as a director. This change of management came about amidst reports that Suzuki had allegedly been mismanaging company funds by directing them towards his girlfriend's failed business ventures. This reportedly created tension between Suzuki and Hoshino, with the latter reportedly citing it as a long-term internal problem at the company since the couple met in 2013 and was the reason for his planned departure from the company, although a spokesperson for Studio Ghibli in a statement to Variety denied that Hoshino's departure had anything to do with these reports. The source of the allegations came from the tabloid paper, Shūkan Josei and was not corroborated by the mainstream media in Japan."
  },
  {
    title:"Nippon TV era",
    text:"In October 2023, the studio became a subsidiary of Nippon Television Holdings, Inc.. Studio Ghibli's leadership transitioned to Hiroyuki Fukuda, a senior executive at Nippon TV. Toshio Suzuki became Chairman and Hayao Miyazaki became Honorary Chairman. Nippon TV acquired a 42.3% stake in Studio Ghibli. The decision was driven by the advanced ages of Miyazaki and Suzuki, aged 82 and 75, respectively. The studio had considered Miyazaki's son, Goro Miyazaki, as a successor but opted for external leadership due to concerns and Goro's reluctance. Nippon TV started to handle management, allowing Studio Ghibli to focus on creative endeavors. The takeover took effect on October 6."
  }

]);
</script>

<style lang="scss" scoped>
.about-template {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 5rem;
  .articles-grid {
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(1, 1fr);
  }
  .criadores-grid {
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(3, 1fr);
    .criadores {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      box-shadow: 0 20px 20px 5px rgba(0, 0, 0, 0.8);
    }
  }
}

/* Styles for narrower screens (e.g., mobile) */
@media (max-width: 768px) {
  .about-template {
    grid-template-columns: repeat( auto-fit, minmax(200px, 1fr));
    grid-gap: 3rem;
    .articles-grid {
      grid-template-columns: repeat( auto-fit, minmax(200px, 1fr));
      grid-gap: 2rem;
      padding-left: 2rem;
    }
    .criadores-grid {
      width: 80%;
      height: 80%;
      grid-template-columns: repeat( auto-fit, minmax(80px, 3fr));
      grid-gap: 1rem;
      margin-left: 2rem;
      font-size: 0.7rem;
    }
  }
}
</style>