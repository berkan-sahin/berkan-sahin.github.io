---
title: Berkan's Personal Blog
author: Berkan Şahin
css: /styles.css
---

## 24/02/2021

### On Fake News and Content Aggregation

Between the recent political events in the US and the spread of 5G tinfoil hat nonsense, the topic of fake news seems to be quite relevant nowadays. It seems like the engagement-maximizing feed systems of large social media platforms have backfired as they promote sensational and exaggerated content, and malicious actors could abuse these algorithms to push their content further. Tech giants would want you to think that centralized and heavily sanitized discourse is the only solution for "undesirable" content. I think that this is a rather limiting perspective and makes too much assumptions. As it is with software, most tech giants would want you to think that you are unimportant and you just have to use what the Gods of Silicon have blessed you with. But I think solutions to these problems should be user-centric and as unintrusive as possible.

One solution I can think of is to seperate "content" and "feed". An open standard a la RSS could be created to allow a client to fetch content from various social media platforms. This standard could provide functionality additional to RSS, such as a support for rich content such as image galleries, blog-posts and polls, and optional vote and comment functionality. Then on the client, the user could select the algorithm that would sort the content for them, with a libre algorithm provided with the standard. Then existing sites like Facebook could split content hosting and the feed algorithm. Then they could market their own client complying with this standard but containing their secret-sauce feed algorithm. Therefore if someone is content with Facebook collecting their data and serving them content, they can use that client while someone not wanting to use that client could use another one or build their own client. These two people would be able to communicate and enjoy content not only from their own provider, but also instances hosted by bloggers or other news publications (that would work like the Facebook of Disqus integration in some news sites, but less intrusive). No one could establish and secure a monopoly in such a system, because people could self-host their content and still communicate with other instances. 

Let's see how such a decentralized system would combat with propaganda and fake news. Since the feed generation is done on the client side, an ad-blocker like system could be implemented. The user could then install blocklists from different sources and since this is seperate from the content, using these lists for censorship would be extremely difficult. Some people could specialize in these lists and sell them, some foundations can do it voluntarily to fight disinformation and mainstream client providers could subscribe to some paid lists and bake them into their feed algorithms, similar to spam filtering in e-mail.

Another thing is that the instances don't have to be public. Some publications could require proof of subscirption in order to decrypt the content, some private instances might require an account and an invitation, for example, for an internal newsfeed of a business. And this would allow social network providers to have tighter moderation, as they can't have a monopoly and one could just start a compatible instance with different rules.

This system is obviously more fragmented and requires the big social media corporations to accept this and play nice, but in the end, one could have a single aggregator that they are not tied to instead of a bunch of different applications, each with its own black box algorithm and set of friends that prevent you from switching. 

Very few people would buy a radio without a tuning dial, or a TV with only one channel, or a DVD player with the disc permanently embedded in it. Even the idea of it seems extremely greedy and, frankly, useless. So why should these things' modern equivalent be so extremely locekd down?

