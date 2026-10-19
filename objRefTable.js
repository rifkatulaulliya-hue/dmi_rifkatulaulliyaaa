const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Audio,
		C3.Plugins.Mouse,
		C3.Plugins.Browser,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Browser.Acts.Close,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.CompareVar
	];
};
self.C3_JsPropNameTable = [
	{background: 0},
	{play: 0},
	{kluar: 0},
	{background2: 0},
	{backgroun3: 0},
	{Audio: 0},
	{Mouse: 0},
	{Browser: 0},
	{bola: 0},
	{score: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Text: 0},
	{Text2: 0},
	{score1: 0}
];

self.InstanceType = {
	background: class extends self.ISpriteInstance {},
	play: class extends self.ISpriteInstance {},
	kluar: class extends self.ISpriteInstance {},
	background2: class extends self.ISpriteInstance {},
	backgroun3: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	bola: class extends self.ISpriteInstance {},
	score: class extends self.ITextInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Text2: class extends self.ITextInstance {}
}