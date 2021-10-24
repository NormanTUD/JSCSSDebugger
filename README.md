# JSCSSDebugger

Tries out all kinds of different css options in a JavaScript-script

# To be honest ...

... I don't know all of the CSS-model-information. Sometimes I stumble on situations where I don't know
what causes that the site is not displayed as I want. So, to get a general idea of this script is:
you copy&paste to the site you want to debug and then enter this in the command line console:

```javascript
test_css_params_by_id("idofyourelement");
test_css_params_by_class("classofyourelements");
```

# Caveats

This does neither test all settings, since they are too complex, nor does this really know when it
fixed something. So you need to have an eye on what's happening on the screen.
