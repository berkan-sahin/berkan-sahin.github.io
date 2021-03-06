---
author: Berkan Şahin
date: 21/01/2021
css : /styles.css
title: Salep
---

Salep is a chatbot for Discord whose primary purpose is to store quotes (a.k.a inciler) for various contexts and when called upon, message one of those quotes at random. It also displays exchange rate for various currencies compared with the Turkish Lira.

Salep is free (özgür) software licensed under GNU Affero GPL 3.0. Source code of Salep is hosted on [GitHub](https://github.com/berkan-sahin/salep).

## Setup

Please make sure that MongoDB is [installed](https://docs.mongodb.com/manual/installation/) and running before starting up the bot

```bash
git clone https://github.com/berkan-sahin/salep.git # Clone the repository
cd salep
python3 -m venv .venv # Create virtual env
source .venv/bin/activate # Switch into virtual env
python3 -m pip install discord.py requests pymongo # Install dependencies
echo "YOUR-DISCORD-TOKEN-HERE" > TOKEN # Token file stores private info
echo "YOUR-CURRENCY-API-KEY-HERE" >> TOKEN # *MAKE SURE TO ADD IT IN .gitignore in order to avoid bot abuse*
python3 salep.py # Test the bot, when you are done hit Ctrl-C
```

For subsequent runs, you can run the `launch.sh` from inside the project root and type `kill $(cat .pid)` to kill the bot

## Invocation

Below are the commands that are suported by Salep

Command | Arguments | Description | Example
---- | ----- | ---- | ----
s!döviz | name or three letter code for the currency | Reports the current exchange rate between a user-specified currency and the Turkish Lira | `s!döviz dolar` or `s!döviz usd`
s!add_quote | name or @mention of the person the quote belongs to, followed by the quote | Adds a quote to the corresponding entry for the mentioned person and creates said entry if the person doesn't exist | `s!add_quote @torvalds Talk is cheap, show me the code.` or `s!add_quote wall Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris.`
s!quote | name or @mention of the person to pick a quote from | Picks and posts a quote belonging to the specific person and guild at random from the database | `s!quote @torvalds` or `s!quote wall`
s!capture_quote | N/A | Captures the message that was replied to and stores it as a quote | N/A
s!rm_quote | name or @mention, followed by a unique part of the quote to be removed | Remove any quote containing the specified word(s) *This command can only be called by members that are permitted to manage messages* | `s!rm_quote wall virtues`

## Invites

Since the bot is WIP, I don't publicly distribute invites yet. If you wish to test the bot however, you can [email me](mailto:berkan.sahin@ug.bilkent.edu.tr) in order to receive the invite link

## Documentation

Coming *very* soon!