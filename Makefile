MAKE_DIR = $(PWD)
MMO_ROOT = $(MAKE_DIR)/src/apps/mmo/elm

all: elm

elm: 
	@$(MAKE) -C $(MMO_ROOT)