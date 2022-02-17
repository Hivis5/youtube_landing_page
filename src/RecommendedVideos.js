import React from "react";
import VideoCard from "./VideoCard";
import "./RecommendedVideos.css";
function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Watch Elon Musk deliver the Tesla Model S Plaid"
          views="1.1M Views"
          timestamp=" 6 month ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLRpFE1CqrF0kiUvimY9XzgPQMVzy-il9l9janS0Kes=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="The Verge"
          image="https://img.youtube.com/vi/PNbusPm46Cw/maxresdefault.jpg"
        />
        <VideoCard
          title="Rewind: Best Gadgets of 2021!"
          views="2.5M views"
          timestamp=" 11 days ago"
          channelImage="https://yt3.ggpht.com/lkH37D712tiyphnu0Id0D5MwwQ7IRuwgQLVD05iMXlDWO-kDHut3uI4MgIEAQ9StK0qOST7fiA=s88-c-k-c0x00ffffff-no-rj"
          channel="Marques Brownlee"
          image="https://img.youtube.com/vi/n4xw2fmSCrs/maxresdefault.jpg"
        />
        <VideoCard
          title="The Most Powerful Computers You've Never Heard Of"
          views="5.7M views"
          timestamp=" 2 weeks ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLQYcLqrGZC1RZL4e1AFz5-ImMQmmgObvzWBCL7-mA=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="Veritasium"
          image="https://img.youtube.com/vi/IgF3OX8nT0w/maxresdefault.jpg"
        />
        <VideoCard
          title="2021, in 6 minutes"
          views="2.3M views"
          timestamp=" 11 days ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLTm7P51YEeoapoU-FYmc8v7YfBeHZpbX8CfPCmxAg=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="Vox"
          image="https://img.youtube.com/vi/sTTvilkyTLY/maxresdefault.jpg"
        />
        <VideoCard
          title="How Does The James Webb Space Telescope Work? - Smarter Every Day 262"
          views="2.9M views"
          timestamp=" 3 months ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLQjGSf-ONLuBlcY6KzEFJqoaIJNjiXvM-iahXv7Cg=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="SmarterEveryDay"
          image="https://img.youtube.com/vi/4P8fKd0IVOs/maxresdefault.jpg"
        />
        <VideoCard
          title="React in 100 Seconds"
          views="532K views"
          timestamp=" 1 year ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLTcIl6kKt3lEPJEySUf_hpHiKDKiFeo9eWPReLysQ=s176-c-k-c0x00ffffff-no-rj"
          channel="Fireship"
          image="https://img.youtube.com/vi/Tn6-PIqc4UM/maxresdefault.jpg"
        />
        <VideoCard
          title="How we get tree planting wrong"
          views="253k views"
          timestamp=" 1 month ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLTB7wIDpQxbb_Mu78mNGdUWONubtfzlA1XIbUr_11A=s88-c-k-c0x00ffffff-no-rj"
          channel="The Guardian"
          image="https://img.youtube.com/vi/dhvOJrkhh8I/maxresdefault.jpg"
        />
        <VideoCard
          title="The Race to Zero Emissions, & Why the World Depends On It | Planet A"
          views="169k views"
          timestamp=" 6 days ago"
          channelImage="https://yt3.ggpht.com/7Rovb42ic91FtDS7hu-xfJVGtDLJXpkurMaKGisFKNRq0seH_qZ74ihhB5YRfEao0I5xiZnu=s88-c-k-c0x00ffffff-no-rj"
          channel="VICE News"
          image="https://img.youtube.com/vi/uazFKbZHIog/maxresdefault.jpg"
        />
        <VideoCard
          title="The Insane Engineering of James Webb Telescope"
          views="5M views"
          timestamp=" 3 weeks ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLRHtlYUfKRGpaVbGFvz8w2M8r91QToE7kk_n2Hgnw=s88-c-k-c0x00ffffff-no-rj"
          channel="Real Engineering"
          image="https://img.youtube.com/vi/aICaAEXDJQQ/maxresdefault.jpg"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
