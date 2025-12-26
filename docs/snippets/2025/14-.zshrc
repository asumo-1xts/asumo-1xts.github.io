unsetopt nomatch # 取得先が存在しなくてもエラーにしない
autoload -Uz compinit && compinit # 補完のための呪文

eval "$(zoxide init zsh)"
eval "$(sheldon source)"
eval "$(starship init zsh)"
eval "$(~/.local/bin/mise activate zsh)"
eval "$(uv generate-shell-completion zsh)"
eval "$(uvx --generate-shell-completion zsh)"
source ~/.zsh_aliases
