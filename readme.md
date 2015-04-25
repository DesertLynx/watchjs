### WatchJS

A simple partial-reimplementation in javscript of the shell command `watch` which seems to bug up on my system. 
This implementation blindly repeats the command after execution of the blocking shell command. It makes no attempt
to handle output in any fancy manner. it is a simple wrapper of `setInterval` and a `shell_exec`

**Usage** 

    watchjs curl http://google.com
