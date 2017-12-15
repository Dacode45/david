MAIN_SRC = $(wildcard src/*.elm)

all: mmo_elm.js

mmo_elm.js: $(MAIN_SRC)
	elm-make src/Main.elm --output=mmo_elm.js
