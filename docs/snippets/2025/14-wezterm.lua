local wezterm = require("wezterm")
local config = wezterm.config_builder()
local act = wezterm.action

config.window_decorations = "RESIZE"
config.initial_cols = 120
config.initial_rows = 28
config.font_size = 11
config.font = wezterm.font("Moralerspace Neon HW")
config.color_scheme = "iceberg-dark"

return config