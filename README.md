# unibot-safe-eval
Safe eval plugin for UniBot. This is done because [unibot-eval](https://github.com/UniBot/unibot-eval) isn't safe to 
use in real world. This plugin uses [sandbox](http://gf3.github.io/sandbox/) for actual code runner.

## Install
To your UniBot application

```npm install git://github.com/UniBot/unibot-safe-eval --save```

And after that register new plugin on IRC channels what you need

```plugin [#channel] safe-eval```

ps. remember to restart your UnitBot.

## Usage
Below is couple of examples of usage.

```
~~2+2
~~Math.random()
~~(function(name) { return 'hello, ' + name; })('foobar')
```