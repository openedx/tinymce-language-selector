![Image](./docs/language-selector.gif)

# Description

This is a plugin for TinyMCE 5 that allows users to specify what language their text is written in. The plugin wraps
 the desired text in `span` tags with a `lang` attribute for the specified language. Unspecified text is assumed to be
 written in the page's language. This helps the resulting text comply with WCAG 2.0 3.1.2 Language of Parts: "The
 human language of each passage or phrase in the content can be programmatically determined..."
   
The plugin is intended for use as you are creating a new passage. It also works when you need to change the language of
 an existing passage, but not as well (see below Caveats section for details). For best results, don’t select any text
 and just change in and out of different language modes while typing.
  
# Installation

This is published as an NPM package.

`npm install @edx/tinymce-language-selector`

# Usage

Import the plugin to add it to TinyMCE's plugin manager:

`import '@edx/tinymce-language-selector'`

Make sure TinyMCE has already been imported since the plugin needs access to the global `tinymce` variable.

Then you can use the plugin just like one of TinyMCE's builtin plugins. When configuring TinyMCE, make sure to modify
 `extended_valid_elements` to allow `span` tags with the `lang` attribute or the `id` attribute and to strip empty `span
 ` tags:

`extended_valid_elements: 'span[lang|id] -span'`

# Caveats
- The repo currently doesn't contain any unit tests due to how specific TinyMCE's testing framework is to itself. It
 has only been tested manually so far.
- One known limitation is that you can't select and change the language of text that goes across multiple HTML tags
 (besides formatting). An error will be raised to the user. You can select and change the language of anything
 smaller than a paragraph, provided the paragraph does not contain any language spans inside of it already.
- There wasn’t a TinyMCE-endorsed way of changing the button text, so we directly modify the `innerText` of the button
 node. I’m not sure how well this will work with internationalization and non-default styling.
