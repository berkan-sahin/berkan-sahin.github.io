%.html : %.md template.html gruvbox-dark.theme
		pandoc -s $< --template=template.html --highlight-style=gruvbox-dark.theme -o $@