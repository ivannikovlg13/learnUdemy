const presets = [
{
  'presets': [
    [
      '@babel/env',
      {
        'targets': {
          'edge': '17',
          'firefox': '60',
          'chrome': '67',
          'safari': '11.1',
          'ie': '10'
        }
      }
    ]
  ]
}
];

module.exports = {presets};

