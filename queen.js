const _0xae3fbd=_0x5872;(function(_0x55cb69,_0x2f1702){const _0x46bb0d=_0x5872,_0x16f0b8=_0x55cb69();while(!![]){try{const _0x360c0c=parseInt(_0x46bb0d(0x1e2))/0x1*(parseInt(_0x46bb0d(0x1b7))/0x2)+parseInt(_0x46bb0d(0x1c4))/0x3*(-parseInt(_0x46bb0d(0x1f9))/0x4)+parseInt(_0x46bb0d(0x1be))/0x5*(-parseInt(_0x46bb0d(0x1ca))/0x6)+parseInt(_0x46bb0d(0x21a))/0x7+parseInt(_0x46bb0d(0x1fe))/0x8*(parseInt(_0x46bb0d(0x1fc))/0x9)+parseInt(_0x46bb0d(0x229))/0xa+-parseInt(_0x46bb0d(0x21e))/0xb;if(_0x360c0c===_0x2f1702)break;else _0x16f0b8['push'](_0x16f0b8['shift']());}catch(_0x36f062){_0x16f0b8['push'](_0x16f0b8['shift']());}}}(_0x18c9,0xac89c));const {default:makeWASocket,useMultiFileAuthState,DisconnectReason,jidNormalizedUser,getContentType,fetchLatestBaileysVersion,Browsers}=require(_0xae3fbd(0x218)),l=console['log'],{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require(_0xae3fbd(0x1a2)),fs=require('fs'),P=require(_0xae3fbd(0x1e8)),config=require('./config'),qrcode=require(_0xae3fbd(0x1b3)),util=require(_0xae3fbd(0x1b4)),{sms,downloadMediaMessage}=require('./lib/msg'),axios=require(_0xae3fbd(0x226)),{File}=require('megajs'),ownerNumber=['94717775628'];function _0x5872(_0x47ad65,_0x4cc8f7){const _0x18c946=_0x18c9();return _0x5872=function(_0x58724a,_0x4a4713){_0x58724a=_0x58724a-0x1a1;let _0x5636a3=_0x18c946[_0x58724a];return _0x5636a3;},_0x5872(_0x47ad65,_0x4cc8f7);}if(!fs[_0xae3fbd(0x1e1)](__dirname+_0xae3fbd(0x1a5))){if(!config[_0xae3fbd(0x208)])return console['log'](_0xae3fbd(0x1ba));const sessdata=config[_0xae3fbd(0x208)],filer=File[_0xae3fbd(0x233)](_0xae3fbd(0x1b8)+sessdata);filer['download']((_0x321d76,_0x1fa221)=>{const _0x2bfc82=_0xae3fbd;if(_0x321d76)throw _0x321d76;fs[_0x2bfc82(0x1d0)](__dirname+_0x2bfc82(0x1a5),_0x1fa221,()=>{const _0x2583ec=_0x2bfc82;console['log'](_0x2583ec(0x1fa));});});}const express=require(_0xae3fbd(0x1dd)),app=express(),port=process['env'][_0xae3fbd(0x23a)]||0x1f40;async function connectToWA(){const _0x4feb0d=_0xae3fbd,_0x5db5df=require(_0x4feb0d(0x234));_0x5db5df();const {readEnv:_0x84eb90}=require(_0x4feb0d(0x23b)),_0x1471a1=await _0x84eb90(),_0x1fc80b=_0x1471a1['PREFIX'];console[_0x4feb0d(0x1de)](_0x4feb0d(0x1ad));const {state:_0x41da5c,saveCreds:_0x5f399e}=await useMultiFileAuthState(__dirname+_0x4feb0d(0x200));var {version:_0x5d9531}=await fetchLatestBaileysVersion();const _0x151a17=makeWASocket({'logger':P({'level':_0x4feb0d(0x1f5)}),'printQRInTerminal':![],'browser':Browsers['macOS']('Firefox'),'syncFullHistory':!![],'auth':_0x41da5c,'version':_0x5d9531});_0x151a17['ev']['on'](_0x4feb0d(0x1b5),_0x390b5b=>{const _0x2e683d=_0x4feb0d,{connection:_0x5a6c10,lastDisconnect:_0x3d488b}=_0x390b5b;if(_0x5a6c10===_0x2e683d(0x223))_0x3d488b[_0x2e683d(0x1eb)][_0x2e683d(0x23c)][_0x2e683d(0x1a3)]!==DisconnectReason[_0x2e683d(0x209)]&&connectToWA();else{if(_0x5a6c10===_0x2e683d(0x1f2)){console[_0x2e683d(0x1de)](_0x2e683d(0x1a1));const _0x44b02b=require(_0x2e683d(0x1db));fs[_0x2e683d(0x213)](_0x2e683d(0x228))[_0x2e683d(0x1f6)](_0x3ebb8a=>{const _0xa59c05=_0x2e683d;_0x44b02b[_0xa59c05(0x1bc)](_0x3ebb8a)[_0xa59c05(0x1d4)]()==_0xa59c05(0x1ea)&&require(_0xa59c05(0x228)+_0x3ebb8a);}),console[_0x2e683d(0x1de)]('Plugins\x20installed\x20successful\x20✅'),console[_0x2e683d(0x1de)](_0x2e683d(0x1bf));let _0x1c0877=_0x2e683d(0x203)+_0x1fc80b+'\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20**🔹\x20OWNER:**\x20\x20'+ownerNumber+'\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20---\x20Thank\x20you\x20for\x20using\x20**Queen_Anju\x20MD**.\x20\x0a\x20\x20\x20\x20We\x27re\x20here\x20to\x20make\x20your\x20experience\x20enjoyable\x20and\x20seamless.\x20\x0a\x20\x20\x20\x20If\x20you\x20need\x20any\x20help\x20or\x20have\x20questions,\x20don\x27t\x20hesitate\x20to\x20ask.\x20\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20**Enjoy\x20your\x20time\x20with\x20us!**\x20😊\x20';_0x151a17[_0x2e683d(0x202)](_0x1471a1[_0x2e683d(0x1ce)]+_0x2e683d(0x1d1),{'image':{'url':_0x2e683d(0x1b9)},'caption':_0x1c0877});}}}),_0x1471a1[_0x4feb0d(0x232)]===_0x4feb0d(0x1a4)&&_0x151a17['ev']['on'](_0x4feb0d(0x21c),async _0x2f50c6=>{const _0x577fab=_0x4feb0d,{id:_0x108e9f,participants:_0x1dbc4f,action:_0x58e20a}=_0x2f50c6,_0x41602a=await _0x151a17[_0x577fab(0x1a8)](_0x108e9f),_0x32bc3f=_0x41602a['subject'];let _0x248609;try{_0x248609=await _0x151a17[_0x577fab(0x21b)](_0x108e9f);}catch(_0x55d2dd){_0x248609='https://telegra.ph/file/adc46970456c26cad0c15.jpg';}_0x1dbc4f['forEach'](async _0x46b5c7=>{const _0x5a2974=_0x577fab;let _0x282445='';if(_0x58e20a===_0x5a2974(0x23e))_0x282445=_0x5a2974(0x1ed)+_0x46b5c7[_0x5a2974(0x1e6)]('@')[0x0]+_0x5a2974(0x236)+runtime(process[_0x5a2974(0x1ab)]())+_0x5a2974(0x1d2);else _0x58e20a==='remove'&&(_0x282445=_0x5a2974(0x219)+_0x46b5c7[_0x5a2974(0x1e6)]('@')[0x0]+_0x5a2974(0x220)+_0x32bc3f+_0x5a2974(0x1ef));_0x282445&&await _0x151a17[_0x5a2974(0x202)](_0x108e9f,{'text':_0x282445,'contextInfo':{'mentionedJid':[_0x46b5c7]},'caption':_0x5a2974(0x205),'image':{'url':_0x248609}});});}),_0x151a17['ev']['on'](_0x4feb0d(0x1c8),async _0xb59ab6=>{const _0x6bafdd=_0x4feb0d;_0x1471a1['ALLWAYS_OFFLINE']===_0x6bafdd(0x1a4)&&_0xb59ab6['key']&&_0xb59ab6[_0x6bafdd(0x1e5)][_0x6bafdd(0x1e4)]!==_0x6bafdd(0x1b2)&&await _0x151a17[_0x6bafdd(0x1af)]([_0xb59ab6[_0x6bafdd(0x1e5)]]);_0xb59ab6=_0xb59ab6[_0x6bafdd(0x215)][0x0];if(!_0xb59ab6[_0x6bafdd(0x204)])return;_0xb59ab6['message']=getContentType(_0xb59ab6['message'])===_0x6bafdd(0x1ac)?_0xb59ab6[_0x6bafdd(0x204)][_0x6bafdd(0x1ac)][_0x6bafdd(0x204)]:_0xb59ab6[_0x6bafdd(0x204)];_0xb59ab6[_0x6bafdd(0x1e5)]&&_0xb59ab6['key'][_0x6bafdd(0x1e4)]===_0x6bafdd(0x1b2)&&_0x1471a1['AUTO_READ_STATUS']===_0x6bafdd(0x1a4)&&await _0x151a17['readMessages']([_0xb59ab6[_0x6bafdd(0x1e5)]]);const _0x38474f=sms(_0x151a17,_0xb59ab6),_0x784e15=getContentType(_0xb59ab6[_0x6bafdd(0x204)]),_0x5a968c=JSON[_0x6bafdd(0x210)](_0xb59ab6['message']),_0x481109=_0xb59ab6[_0x6bafdd(0x1e5)][_0x6bafdd(0x1e4)],_0x332149=_0x784e15==_0x6bafdd(0x1d7)&&_0xb59ab6[_0x6bafdd(0x204)][_0x6bafdd(0x1d7)][_0x6bafdd(0x1d6)]!=null?_0xb59ab6['message']['extendedTextMessage']['contextInfo'][_0x6bafdd(0x1c7)]||[]:[],_0x6a6697=_0x784e15===_0x6bafdd(0x20b)?_0xb59ab6[_0x6bafdd(0x204)][_0x6bafdd(0x20b)]:_0x784e15===_0x6bafdd(0x1d7)?_0xb59ab6['message'][_0x6bafdd(0x1d7)][_0x6bafdd(0x235)]:_0x784e15==_0x6bafdd(0x1e9)&&_0xb59ab6[_0x6bafdd(0x204)][_0x6bafdd(0x1e9)][_0x6bafdd(0x1ec)]?_0xb59ab6[_0x6bafdd(0x204)][_0x6bafdd(0x1e9)][_0x6bafdd(0x1ec)]:_0x784e15==_0x6bafdd(0x1b6)&&_0xb59ab6[_0x6bafdd(0x204)][_0x6bafdd(0x1b6)][_0x6bafdd(0x1ec)]?_0xb59ab6['message'][_0x6bafdd(0x1b6)][_0x6bafdd(0x1ec)]:'',_0x190970=_0x6a6697[_0x6bafdd(0x211)](_0x1fc80b),_0x585ce3=_0x190970?_0x6a6697['slice'](_0x1fc80b[_0x6bafdd(0x230)])['trim']()[_0x6bafdd(0x1e6)]('\x20')[_0x6bafdd(0x22f)]()[_0x6bafdd(0x1d4)]():'',_0x7fc844=_0x6a6697[_0x6bafdd(0x222)]()[_0x6bafdd(0x1e6)](/ +/)[_0x6bafdd(0x23d)](0x1),_0x3d4cf2=_0x7fc844[_0x6bafdd(0x1cc)]('\x20'),_0xaf1d67=_0x481109[_0x6bafdd(0x22c)](_0x6bafdd(0x1c3)),_0x390473=_0xb59ab6[_0x6bafdd(0x1e5)][_0x6bafdd(0x1e0)]?_0x151a17['user']['id']['split'](':')[0x0]+_0x6bafdd(0x1d1)||_0x151a17[_0x6bafdd(0x214)]['id']:_0xb59ab6[_0x6bafdd(0x1e5)][_0x6bafdd(0x1c0)]||_0xb59ab6[_0x6bafdd(0x1e5)][_0x6bafdd(0x1e4)],_0x54cb3d=_0x390473['split']('@')[0x0],_0x551f31=_0x151a17['user']['id']['split'](':')[0x0],_0x10df2f=_0xb59ab6[_0x6bafdd(0x1f8)]||_0x6bafdd(0x1d5),_0x508820=_0x551f31['includes'](_0x54cb3d),_0x172405=ownerNumber[_0x6bafdd(0x206)](_0x54cb3d)||_0x508820,_0x244bd6=await jidNormalizedUser(_0x151a17['user']['id']),_0x2f1a3f=_0xaf1d67?await _0x151a17[_0x6bafdd(0x1a8)](_0x481109)['catch'](_0x58ec43=>{}):'',_0x325f1b=_0xaf1d67?_0x2f1a3f[_0x6bafdd(0x1f3)]:'',_0x2ceeb5=_0xaf1d67?await _0x2f1a3f[_0x6bafdd(0x231)]:'',_0x1f5a56=_0xaf1d67?await getGroupAdmins(_0x2ceeb5):'',_0x4c8156=_0xaf1d67?_0x1f5a56[_0x6bafdd(0x206)](_0x244bd6):![],_0x57dd89=_0xaf1d67?_0x1f5a56[_0x6bafdd(0x206)](_0x390473):![],_0x372cbb=_0x421d9e=>{const _0x45fe20=_0x6bafdd;_0x151a17[_0x45fe20(0x202)](_0x481109,{'text':_0x421d9e},{'quoted':_0xb59ab6});};_0x151a17[_0x6bafdd(0x1ae)]=async(_0x5d9a6b,_0x578561,_0x5c554c,_0x2f867e,_0x3a463f={})=>{const _0x4a5032=_0x6bafdd;let _0x2342df='',_0x32badd=await axios[_0x4a5032(0x1cd)](_0x578561);_0x2342df=_0x32badd[_0x4a5032(0x1f0)][_0x4a5032(0x237)];if(_0x2342df[_0x4a5032(0x1e6)]('/')[0x1]===_0x4a5032(0x1a7))return _0x151a17[_0x4a5032(0x202)](_0x5d9a6b,{'video':await getBuffer(_0x578561),'caption':_0x5c554c,'gifPlayback':!![],..._0x3a463f},{'quoted':_0x2f867e,..._0x3a463f});let _0x4fad85=_0x2342df[_0x4a5032(0x1e6)]('/')[0x0]+_0x4a5032(0x1bd);if(_0x2342df===_0x4a5032(0x207))return _0x151a17['sendMessage'](_0x5d9a6b,{'document':await getBuffer(_0x578561),'mimetype':'application/pdf','caption':_0x5c554c,..._0x3a463f},{'quoted':_0x2f867e,..._0x3a463f});if(_0x2342df[_0x4a5032(0x1e6)]('/')[0x0]===_0x4a5032(0x22d))return _0x151a17['sendMessage'](_0x5d9a6b,{'image':await getBuffer(_0x578561),'caption':_0x5c554c,..._0x3a463f},{'quoted':_0x2f867e,..._0x3a463f});if(_0x2342df[_0x4a5032(0x1e6)]('/')[0x0]===_0x4a5032(0x20e))return _0x151a17['sendMessage'](_0x5d9a6b,{'video':await getBuffer(_0x578561),'caption':_0x5c554c,'mimetype':'video/mp4',..._0x3a463f},{'quoted':_0x2f867e,..._0x3a463f});if(_0x2342df[_0x4a5032(0x1e6)]('/')[0x0]===_0x4a5032(0x1aa))return _0x151a17[_0x4a5032(0x202)](_0x5d9a6b,{'audio':await getBuffer(_0x578561),'caption':_0x5c554c,'mimetype':_0x4a5032(0x1e3),..._0x3a463f},{'quoted':_0x2f867e,..._0x3a463f});};_0x190970&&_0x1471a1[_0x6bafdd(0x20a)]===_0x6bafdd(0x1a4)&&_0x1471a1[_0x6bafdd(0x201)]==='false'&&await _0x151a17[_0x6bafdd(0x1af)]([_0xb59ab6[_0x6bafdd(0x1e5)]]);if(!_0x172405&&_0x1471a1[_0x6bafdd(0x217)]===_0x6bafdd(0x225))return;if(!_0x172405&&_0xaf1d67&&_0x1471a1[_0x6bafdd(0x217)]===_0x6bafdd(0x238))return;if(!_0x172405&&!_0xaf1d67&&_0x1471a1[_0x6bafdd(0x217)]===_0x6bafdd(0x227))return;const _0x3abccb=require(_0x6bafdd(0x1c2)),_0x5dab67=_0x190970?_0x6a6697['slice'](0x1)[_0x6bafdd(0x222)]()[_0x6bafdd(0x1e6)]('\x20')[0x0]['toLowerCase']():![];if(_0x190970){const _0x109ecb=_0x3abccb[_0x6bafdd(0x1bb)]['find'](_0x5f54ce=>_0x5f54ce[_0x6bafdd(0x22a)]===_0x5dab67)||_0x3abccb[_0x6bafdd(0x1bb)][_0x6bafdd(0x1b1)](_0x43cf63=>_0x43cf63[_0x6bafdd(0x1c5)]&&_0x43cf63[_0x6bafdd(0x1c5)][_0x6bafdd(0x206)](_0x5dab67));if(_0x109ecb){if(_0x109ecb[_0x6bafdd(0x20f)])_0x151a17['sendMessage'](_0x481109,{'react':{'text':_0x109ecb['react'],'key':_0xb59ab6[_0x6bafdd(0x1e5)]}});try{_0x109ecb[_0x6bafdd(0x1c9)](_0x151a17,_0xb59ab6,_0x38474f,{'from':_0x481109,'quoted':_0x332149,'body':_0x6a6697,'isCmd':_0x190970,'command':_0x585ce3,'args':_0x7fc844,'q':_0x3d4cf2,'isGroup':_0xaf1d67,'sender':_0x390473,'senderNumber':_0x54cb3d,'botNumber2':_0x244bd6,'botNumber':_0x551f31,'pushname':_0x10df2f,'isMe':_0x508820,'isOwner':_0x172405,'groupMetadata':_0x2f1a3f,'groupName':_0x325f1b,'participants':_0x2ceeb5,'groupAdmins':_0x1f5a56,'isBotAdmins':_0x4c8156,'isAdmins':_0x57dd89,'reply':_0x372cbb});}catch(_0x2ef716){console[_0x6bafdd(0x1eb)]('[PLUGIN\x20ERROR]\x20'+_0x2ef716);}}}_0x3abccb[_0x6bafdd(0x1bb)][_0x6bafdd(0x239)](async _0x14e856=>{const _0x56135d=_0x6bafdd;if(_0x6a6697&&_0x14e856['on']===_0x56135d(0x21f))_0x14e856['function'](_0x151a17,_0xb59ab6,_0x38474f,{'from':_0x481109,'l':l,'quoted':_0x332149,'body':_0x6a6697,'isCmd':_0x190970,'command':_0x14e856,'args':_0x7fc844,'q':_0x3d4cf2,'isGroup':_0xaf1d67,'sender':_0x390473,'senderNumber':_0x54cb3d,'botNumber2':_0x244bd6,'botNumber':_0x551f31,'pushname':_0x10df2f,'isMe':_0x508820,'isOwner':_0x172405,'groupMetadata':_0x2f1a3f,'groupName':_0x325f1b,'participants':_0x2ceeb5,'groupAdmins':_0x1f5a56,'isBotAdmins':_0x4c8156,'isAdmins':_0x57dd89,'reply':_0x372cbb});else{if(_0xb59ab6['q']&&_0x14e856['on']==='text')_0x14e856[_0x56135d(0x1c9)](_0x151a17,_0xb59ab6,_0x38474f,{'from':_0x481109,'l':l,'quoted':_0x332149,'body':_0x6a6697,'isCmd':_0x190970,'command':_0x14e856,'args':_0x7fc844,'q':_0x3d4cf2,'isGroup':_0xaf1d67,'sender':_0x390473,'senderNumber':_0x54cb3d,'botNumber2':_0x244bd6,'botNumber':_0x551f31,'pushname':_0x10df2f,'isMe':_0x508820,'isOwner':_0x172405,'groupMetadata':_0x2f1a3f,'groupName':_0x325f1b,'participants':_0x2ceeb5,'groupAdmins':_0x1f5a56,'isBotAdmins':_0x4c8156,'isAdmins':_0x57dd89,'reply':_0x372cbb});else{if((_0x14e856['on']===_0x56135d(0x22d)||_0x14e856['on']==='photo')&&_0xb59ab6[_0x56135d(0x20d)]==='imageMessage')_0x14e856[_0x56135d(0x1c9)](_0x151a17,_0xb59ab6,_0x38474f,{'from':_0x481109,'l':l,'quoted':_0x332149,'body':_0x6a6697,'isCmd':_0x190970,'command':_0x14e856,'args':_0x7fc844,'q':_0x3d4cf2,'isGroup':_0xaf1d67,'sender':_0x390473,'senderNumber':_0x54cb3d,'botNumber2':_0x244bd6,'botNumber':_0x551f31,'pushname':_0x10df2f,'isMe':_0x508820,'isOwner':_0x172405,'groupMetadata':_0x2f1a3f,'groupName':_0x325f1b,'participants':_0x2ceeb5,'groupAdmins':_0x1f5a56,'isBotAdmins':_0x4c8156,'isAdmins':_0x57dd89,'reply':_0x372cbb});else _0x14e856['on']===_0x56135d(0x212)&&_0xb59ab6[_0x56135d(0x20d)]===_0x56135d(0x1f1)&&_0x14e856['function'](_0x151a17,_0xb59ab6,_0x38474f,{'from':_0x481109,'l':l,'quoted':_0x332149,'body':_0x6a6697,'isCmd':_0x190970,'command':_0x14e856,'args':_0x7fc844,'q':_0x3d4cf2,'isGroup':_0xaf1d67,'sender':_0x390473,'senderNumber':_0x54cb3d,'botNumber2':_0x244bd6,'botNumber':_0x551f31,'pushname':_0x10df2f,'isMe':_0x508820,'isOwner':_0x172405,'groupMetadata':_0x2f1a3f,'groupName':_0x325f1b,'participants':_0x2ceeb5,'groupAdmins':_0x1f5a56,'isBotAdmins':_0x4c8156,'isAdmins':_0x57dd89,'reply':_0x372cbb});}}});if(_0x6a6697==='send'||_0x6a6697===_0x6bafdd(0x1b0)||_0x6a6697===_0x6bafdd(0x1df)||_0x6a6697===_0x6bafdd(0x1f4)||_0x6a6697===_0x6bafdd(0x1a9)||_0x6a6697==='dapan'||_0x6a6697===_0x6bafdd(0x1fd)||_0x6a6697==='Oni'||_0x6a6697===_0x6bafdd(0x1cb)||_0x6a6697===_0x6bafdd(0x224)||_0x6a6697===_0x6bafdd(0x23f)||_0x6a6697===_0x6bafdd(0x1e7)||_0x6a6697==='ewam'||_0x6a6697==='Ewam'||_0x6a6697==='sv'||_0x6a6697==='Sv'||_0x6a6697===_0x6bafdd(0x1ee)||_0x6a6697===_0x6bafdd(0x216)){const _0x3676fb=JSON[_0x6bafdd(0x210)](_0xb59ab6['message'],null,0x2),_0x14d7a0=JSON[_0x6bafdd(0x1dc)](_0x3676fb),_0x43e55f=_0x14d7a0['extendedTextMessage'][_0x6bafdd(0x1d6)][_0x6bafdd(0x1e4)];if(!_0x43e55f)return;const _0x572292=_0x588c7f=>{const _0x11cd9d=_0x6bafdd,_0x3d3d41={'jpg':_0x11cd9d(0x22e),'png':_0x11cd9d(0x1d9),'mp4':_0x11cd9d(0x240)},_0x5c7176=_0x588c7f[_0x11cd9d(0x20c)]('hex',0x0,0x4);return Object[_0x11cd9d(0x1fb)](_0x3d3d41)[_0x11cd9d(0x1b1)](_0xb28b34=>_0x3d3d41[_0xb28b34]===_0x5c7176);};if(_0x38474f[_0x6bafdd(0x1da)][_0x6bafdd(0x20d)]===_0x6bafdd(0x1e9)){var _0x567733=getRandom('');let _0x1141b7=await _0x38474f[_0x6bafdd(0x1da)][_0x6bafdd(0x1ff)](_0x567733),_0x107604=_0x572292(_0x1141b7);await fs[_0x6bafdd(0x221)][_0x6bafdd(0x1d0)]('./'+_0x107604,_0x1141b7);const _0x4f9b5d=_0x38474f[_0x6bafdd(0x1da)]['imageMessage'][_0x6bafdd(0x1ec)];await _0x151a17[_0x6bafdd(0x202)](_0x481109,{'image':fs[_0x6bafdd(0x21d)]('./'+_0x107604),'caption':_0x4f9b5d});}else{if(_0x38474f[_0x6bafdd(0x1da)][_0x6bafdd(0x20d)]==='videoMessage'){var _0x567733=getRandom('');let _0x22d10a=await _0x38474f[_0x6bafdd(0x1da)][_0x6bafdd(0x1ff)](_0x567733),_0xb96613=_0x572292(_0x22d10a);await fs[_0x6bafdd(0x221)][_0x6bafdd(0x1d0)]('./'+_0xb96613,_0x22d10a);const _0x2b5610=_0x38474f[_0x6bafdd(0x1da)][_0x6bafdd(0x1b6)][_0x6bafdd(0x1ec)];let _0x13a492={'video':fs[_0x6bafdd(0x21d)]('./'+_0xb96613),'mimetype':_0x6bafdd(0x1cf),'fileName':_0x38474f['id']+_0x6bafdd(0x1c6),'caption':_0x2b5610,'headerType':0x4};await _0x151a17[_0x6bafdd(0x202)](_0x481109,_0x13a492,{'quoted':_0xb59ab6});}}}_0x1471a1[_0x6bafdd(0x201)]==='true'&&(_0x151a17[_0x6bafdd(0x1a6)](_0x6bafdd(0x1d8)),console[_0x6bafdd(0x1de)](_0x6bafdd(0x22b)));});}app[_0xae3fbd(0x1c1)]('/',(_0xc5eeb,_0x5ada64)=>{const _0x25f2ea=_0xae3fbd;_0x5ada64[_0x25f2ea(0x1f7)]('hey\x20I\x20am\x20alive,\x20Queen_Anju\x20Is\x20started✅');}),app['listen'](port,()=>console[_0xae3fbd(0x1de)](_0xae3fbd(0x1d3)+port)),setTimeout(()=>{connectToWA();},0xfa0);function _0x18c9(){const _0x118cf4=['Please\x20add\x20your\x20session\x20to\x20SESSION_ID\x20env\x20!!','commands','extname','Message','213720qLkopX','Queen_Anju\x20connected\x20to\x20whatsapp\x20✅','participant','get','./command','@g.us','51NoYfKv','alias','.mp4','quotedMessage','messages.upsert','function','162iSwxuL','save','join','head','BOT_NUMBER','video/mp4','writeFile','@s.whatsapp.net','\x0a\x20\x20\x20\x20>\x20🛠️\x20*Created\x20by:*\x20Janith\x20Rashmika\x20\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20*Here\x27s\x20what\x20I\x20can\x20do:*\x20\x0a\x20\x20\x20\x20💿\x20*Download\x20Songs\x20&\x20Videos*\x20\x0a\x20\x20\x20\x20📰\x20*Fetch\x20Latest\x20News*\x20\x0a\x20\x20\x20\x20🎭\x20*Entertain\x20with\x20Fun\x20Commands*\x20\x0a\x20\x20\x20\x20🔧\x20*Manage\x20Groups*\x20\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20>\x20*Stay\x20connected\x20and\x20enjoy\x20the\x20services!*\x20🌟\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20*©\x20𝙌𝙐𝙀𝙀𝙉\x20𝘼𝙉𝙅𝙐\x20𝘽𝙊𝙏\x20-\x20MD*\x20\x0a\x20\x20\x20\x20*💻\x20GitHub:*\x20github.com/Mrrashmika/Queen_Anju-MD\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','Server\x20listening\x20on\x20port\x20http://localhost:','toLowerCase','Sin\x20Nombre','contextInfo','extendedTextMessage','unavailable','89504e47','quoted','path','parse','express','log','Ewpm','fromMe','existsSync','1aCMlct','audio/mpeg','remoteJid','key','split','Ewanna','pino','imageMessage','.js','error','caption','\x0a\x20\x20\x20\x20⫷⦁[\x20*\x20\x27-\x27_꩜\x20𝙌𝙐𝙀𝙀𝙉\x20𝘼𝙉𝙅𝙐\x20𝘽𝙊𝙏\x20꩜_\x27-\x27\x20*\x20]⦁⫸\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20*Hey\x20@','දාන්න','*.\x20😢\x0a\x20\x20\x20\x20>\x20We\x20hope\x20you\x20had\x20a\x20great\x20time\x20with\x20us.\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20*If\x20you\x20ever\x20decide\x20to\x20come\x20back,\x20you\x27ll\x20always\x20be\x20welcome!*\x20🌟\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20*©\x20𝙌𝙐𝙀𝙀𝙉\x20𝘼𝙉𝙈𝘼𝙈𝙄𝘽𝙏\x20-\x20MD*\x20\x0a\x20\x20\x20\x20*💻\x20GitHub:*\x20github.com/Mrrashmika/Queen_Anju-MD\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','headers','stickerMessage','open','subject','ewpn','silent','forEach','send','pushName','169612BpSmxd','Queen_Anju\x20Session\x20downloaded\x20✅','keys','1920231DcFgPx','oni','24CKMQmi','download','/auth_info_baileys/','ALLWAYS_OFFLINE','sendMessage','\x0a\x20\x20\x20\x20🚀\x20**Queen_Anju\x20MD\x20Connected\x20Successfully!**\x20✅\x20\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20---\x20**🎉\x20Welcome\x20to\x20Queen_Anju\x20MD!**\x20🎉\x20\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20**🔹\x20PREFIX:**\x20','message','Group\x20Icon','includes','application/pdf','SESSION_ID','loggedOut','READ_CMD','conversation','toString','type','video','react','stringify','startsWith','sticker','readdirSync','user','messages','එවම්න','MODE','@whiskeysockets/baileys','\x0a\x20\x20\x20\x20⫷⦁[\x20*\x20\x27-\x27_꩜\x20𝙌𝙐𝙀𝙀𝙉\x20𝘼𝙉𝙅𝙐\x20𝘽𝙊𝙏\x20꩜_\x27-\x27\x20*\x20]⦁⫸\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20😔\x20*Goodbye\x20@','521388qIoXSt','getProfilePicture','group-participants.update','readFileSync','427548fSpqrd','body','!*\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20>\x20We\x27re\x20sad\x20to\x20see\x20you\x20leave\x20*','promises','trim','close','Save','private','axios','groups','./plugins/','12304690hnBbcF','pattern','Queen_Anju\x20is\x20now\x20offline\x20(last\x20seen\x20updated).','endsWith','image','ffd8ffe0','shift','length','participants','WC_GB','fromURL','./lib/mongodb','text','!*\x20👋\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20>\x20🟢\x20*Queen\x20Anju\x20WhatsApp\x20Bot*\x20is\x20up\x20and\x20running!\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Runtime\x20:\x20','content-type','inbox','map','PORT','./lib/database','output','slice','add','ewanna','00000018','Queen_Anju\x20Is\x20Installing...\x20','./lib/functions','statusCode','true','/auth_info_baileys/creds.json','sendPresenceUpdate','gif','groupMetadata','Dapan','audio','uptime','ephemeralMessage','Connecting\x20Queen_Anju\x20🧬...','sendFileUrl','readMessages','Send','find','status@broadcast','qrcode-terminal','util','connection.update','videoMessage','1350986NgiJTo','https://mega.nz/file/','https://telegra.ph/file/adc46970456c26cad0c15.jpg'];_0x18c9=function(){return _0x118cf4;};return _0x18c9();}