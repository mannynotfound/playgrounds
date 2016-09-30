var colors = require('colors/safe');

var availableColors = [
  'black',
  'red',
  'green',
  'yellow',
  'blue',
  'magenta',
  'cyan',
  'white',
  'gray',
  'grey',
  'rainbow',
  'inverse',
  'zebra',
  'random',
  'trap',
  'america'
];

var asciiLines = [
  '                   ___......___                    ',
  '               .\':FBBBBBBBBBBBF:,.                ',
  '           .\';FFBBBBBBBBBBBBBBBBBBF;\'.            ',
  '         \':FBBBBBBBBBBBBBBBBBBBBBBBBBBF,.         ',
  '      .,FBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBF;.       ',
  '     \'FBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB;.     ',
  '   .:BBBBBBBBBBBBBBBBBBBBBBBBBBBBFF\'   FBBBBF.    ',
  '  .FBBBBBBBBBBBBBBBBBBBBBBBBFF;        ;BBBBBB\'   ',
  ' .FBBBBBBBBBBBBBBBBBBBBBBBF             BBBBBB\'  ',
  '.:BBBBBBBBBBBBBBBBBBBBBBBBBF:\'.        .FBBBBBBF. ',
  '\'BBBBBBBBBBBBBBBBBBBBBBBBBBBBB\'         :BBBBBBB; ',
  ':BBBBBBBBBBBBBBBBBBBBBBBBBBBF\'     .\'.  ,BBBBBBBF.',
  'FBBBBBBBBBBBBBB:...;FBBBBBBF.     ;BBBF;:BBBBBBBF.',
  'FBBBBBBBBBBBBB;.     .,:FB:.    .:BBBBBBBBBBBBBBF.',
  ':BBBBBBBBBBBB,          ..     .FBBBBBBBBBBBBBBBF.',
  ',BBBBBBBBBBB\'     ...         .FBBBBBBBBBBBBBBBB; ',
  '.FBBBBBBBBF.     ,BBF:,.     \'FBBBBBBBBBBBBBBBBF. ',
  ' .FBBBBBBF.    .;BBBBBBBF:;\';BBBBBBBBBBBBBBBBBB,  ',
  '  \'BBBBBF.    .:BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB,   ',
  '   .FBBBB:,. .FBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB,    ',
  '    .;BBBBBBFBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBF.     ',
  '      .:BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBF\'       ',
  '        .;FBBBBBBBBBBBBBBBBBBBBBBBBBBBF:.         ',
  '           .;FBBBBBBBBBBBBBBBBBBBBBF;\'.           ',
  '              ..\';:FFFFFFFFFFF:;,..               ',
  '                    ``````````                     '
];

function lineBreak() {
  console.log('');
}

function buzzLogo(options) {
  if (!options) {
    options = {};
  }

  var padding = '';
  var leftPad = options.leftPad || 0;
  for (var i = 0; i < leftPad; i++) {
    padding += ' ';
  }

  lineBreak();
  asciiLines.forEach(function(l) {
    var line = padding + l;
    var color = options.color;
    if (color && availableColors.indexOf(color) > -1) {
      line = colors[color](line);
    }

    console.log(line);
  });
  lineBreak();

  var caption = options.caption;
  if (caption) {
    var marginAmt = (50 - caption.length) / 2;
    var margin = '';
    for (var m = 0; m < marginAmt; m++) {
      margin += ' ';
    }

    console.log(padding + margin + caption);
    console.log('');
  }
}

module.exports = buzzLogo;
