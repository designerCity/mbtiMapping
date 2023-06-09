var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(37.598004414546934, 126.97770621963765), // 지도의 중심좌표 
        level: 8 // 지도의 확대 레벨 
    }; 

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var contents = [
    '<div class="wrap">',
    '    <div class="info">',
    '        <div class="title">',
    '            카카오 판교오피스',
    '            <div class="close" onclick="closeOverlay()" title="닫기"></div>',
    '        </div>',
    '        <div class="body">',
    // '            <div class="img">',
    // '                <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png" width="73" height="70">',
    // '           </div>',
    '            <div class="desc">',
    '                <div class="ellipsis">카카오</div>',
    '                <div class="jibun ellipsis">(우) 12345 (지번) 판교동 807-8</div>',
    '                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>',
    '            </div>',
    '        </div>',
    '    </div>',
    '</div>'
].join('');
var ENFJPositions = [ 
	new kakao.maps.LatLng(37.5262068, 126.9281499),
	new kakao.maps.LatLng(37.5657183, 126.9916744),
	new kakao.maps.LatLng(37.5277156, 126.9305834),
	new kakao.maps.LatLng(37.5117814, 126.9583875),
	new kakao.maps.LatLng(37.5276108, 126.9319425),
	new kakao.maps.LatLng(37.5262068, 126.9281499),
	new kakao.maps.LatLng(37.5128096, 127.0571899),
	new kakao.maps.LatLng(37.5114215, 127.0974981),
	new kakao.maps.LatLng(37.5430781, 127.0418038),
	new kakao.maps.LatLng(37.5414082, 127.058233),
	new kakao.maps.LatLng(37.5114215, 127.0974981),
	new kakao.maps.LatLng(37.5128096, 127.0571899),
	new kakao.maps.LatLng(37.5430781, 127.0418038),
	new kakao.maps.LatLng(37.5262068, 126.9281499),
	new kakao.maps.LatLng(37.5430781, 127.0418038),
	new kakao.maps.LatLng(37.5686977, 126.8338364),
	new kakao.maps.LatLng(37.5845074, 126.963874),
	new kakao.maps.LatLng(37.5262068, 126.9281499),
	new kakao.maps.LatLng(37.5262068, 126.9281499),
	new kakao.maps.LatLng(37.5415839, 127.0542929),
	new kakao.maps.LatLng(37.5493178, 127.0456962),
	new kakao.maps.LatLng(37.5253678, 127.0356836),
	new kakao.maps.LatLng(37.655463, 126.9475552),
	new kakao.maps.LatLng(37.5778377, 126.9729215),
	new kakao.maps.LatLng(37.525014, 127.0364913),
	new kakao.maps.LatLng(37.5857135, 127.0882006),
	new kakao.maps.LatLng(37.5089009, 126.9951198),
	new kakao.maps.LatLng(37.5541456, 126.9209593),
	new kakao.maps.LatLng(37.5510362, 126.9198838),
	new kakao.maps.LatLng(37.5479018, 126.9151081),
	new kakao.maps.LatLng(37.5262068, 126.9281499),
	new kakao.maps.LatLng(37.5430781, 127.0418038),
	new kakao.maps.LatLng(37.5702947, 127.0000462),
	new kakao.maps.LatLng(37.5215328, 127.0383122),
	new kakao.maps.LatLng(37.5262068, 126.9281499),
	new kakao.maps.LatLng(37.5894606, 127.0559521),
	new kakao.maps.LatLng(37.5430781, 127.0418038),
];
var ENFPPositions = [ 
	new kakao.maps.LatLng(37.5743334, 126.9897016),
	new kakao.maps.LatLng(37.5557878, 126.893954),
	new kakao.maps.LatLng(37.582141, 126.981852),
	new kakao.maps.LatLng(37.5139288, 126.8942779),
	new kakao.maps.LatLng(37.5366464, 127.0006993),
	new kakao.maps.LatLng(37.5658716, 126.9749535),
	new kakao.maps.LatLng(37.5709607, 126.977861),
	new kakao.maps.LatLng(37.5774224, 126.9769689),
	new kakao.maps.LatLng(37.5994599, 127.0773198),
	new kakao.maps.LatLng(37.5276108, 126.9319425),
	new kakao.maps.LatLng(37.5191919, 127.1218508),
	new kakao.maps.LatLng(37.5176281, 127.0867333),
	new kakao.maps.LatLng(37.5409571, 127.0570279),
	new kakao.maps.LatLng(37.5363449, 127.0012804),
	new kakao.maps.LatLng(37.5293686, 127.0739751),
	new kakao.maps.LatLng(37.5424567, 126.9618988),
	new kakao.maps.LatLng(37.5262068, 126.9281499),
	new kakao.maps.LatLng(37.551829, 126.9208569),
	new kakao.maps.LatLng(37.5558303, 126.9239003),
	new kakao.maps.LatLng(37.5604515, 126.9237773),
	new kakao.maps.LatLng(37.5416505, 127.0615003),
	new kakao.maps.LatLng(37.561467, 126.9264565),
	new kakao.maps.LatLng(37.4752916, 126.9668873),
	new kakao.maps.LatLng(37.5005881, 127.026785),
	new kakao.maps.LatLng(37.5308585, 127.0024511),
	new kakao.maps.LatLng(37.5657234, 126.9219017),
	new kakao.maps.LatLng(37.5620698, 126.9263573),
	new kakao.maps.LatLng(37.5530482, 126.9064776),
	new kakao.maps.LatLng(37.5419191, 126.9829537),
	new kakao.maps.LatLng(37.5557878, 126.893954),
];
var ENTJPositions = [ 
	new kakao.maps.LatLng(37.5793047, 127.0390528),
	new kakao.maps.LatLng(37.5430781, 127.0418038),
	new kakao.maps.LatLng(37.5658716, 126.9749535),
	new kakao.maps.LatLng(37.5454167, 127.0547085),
	new kakao.maps.LatLng(37.4911195, 127.1458025),
	new kakao.maps.LatLng(37.5538191, 126.9276527),
	new kakao.maps.LatLng(37.5578513, 126.9172954),
	new kakao.maps.LatLng(37.5658548, 126.9928837),
	new kakao.maps.LatLng(37.5793047, 127.0390528),
	new kakao.maps.LatLng(37.5119544, 127.0882842),
	new kakao.maps.LatLng(37.5293686, 127.0739751),
	new kakao.maps.LatLng(37.5419191, 126.9829537),
	new kakao.maps.LatLng(37.5651747, 126.9309197),
	new kakao.maps.LatLng(37.5129211, 127.1027399),
	new kakao.maps.LatLng(37.5216816, 126.9892355),
	new kakao.maps.LatLng(37.5296317, 126.9646109),
	new kakao.maps.LatLng(37.5793047, 127.0390528),
	new kakao.maps.LatLng(37.5293686, 127.0739751),
	new kakao.maps.LatLng(37.5417629, 127.0563841),
	new kakao.maps.LatLng(37.5409382, 126.993615),
	new kakao.maps.LatLng(37.5793047, 127.0390528),
	new kakao.maps.LatLng(37.5807672, 126.9699489),
	new kakao.maps.LatLng(37.5444763, 127.055422),
	new kakao.maps.LatLng(37.5731711, 126.9792345),
];
var ENTPPositions = [ 
	new kakao.maps.LatLng(37.447357, 126.7316373),
	new kakao.maps.LatLng(37.6212213, 127.0413228),
	new kakao.maps.LatLng(37.5744698, 126.9835526),
	new kakao.maps.LatLng(37.5658716, 126.9749535),
	new kakao.maps.LatLng(37.5523473, 126.8998898),
	new kakao.maps.LatLng(37.5422598, 127.0565589),
	new kakao.maps.LatLng(37.5366464, 127.0006993),
	new kakao.maps.LatLng(37.5110078, 127.1239262),
	new kakao.maps.LatLng(37.5641128, 126.9737099),
	new kakao.maps.LatLng(37.5378743, 127.0546227),
	new kakao.maps.LatLng(37.5716981, 126.9860581),
	new kakao.maps.LatLng(37.5616317, 126.9826971),
];
var ESFJPositions = [ 
	new kakao.maps.LatLng(37.5778377, 126.9729215),
	new kakao.maps.LatLng(37.4997484, 126.8916032),
	new kakao.maps.LatLng(37.5262068, 126.9281499),
	new kakao.maps.LatLng(37.5468396, 126.9420228),
	new kakao.maps.LatLng(37.5901591, 127.0200489),
	new kakao.maps.LatLng(37.5276108, 126.9319425),
	new kakao.maps.LatLng(37.5668958, 126.9766827),
	new kakao.maps.LatLng(37.5175144, 126.9586585),
	new kakao.maps.LatLng(37.5385066, 126.9990564),
	new kakao.maps.LatLng(37.5310956, 126.9168564),
	new kakao.maps.LatLng(37.5293686, 127.0739751),
	new kakao.maps.LatLng(37.5430781, 127.0418038),
	new kakao.maps.LatLng(37.5382516, 127.0029975),
	new kakao.maps.LatLng(37.5487033, 126.9180049),
	new kakao.maps.LatLng(37.5805942, 127.0065316),
];
var ESFPPositions = [ 
	new kakao.maps.LatLng(37.5472399, 127.0483594),
	new kakao.maps.LatLng(37.5119544, 127.0882842),
	new kakao.maps.LatLng(37.5114215, 127.0974981),
	new kakao.maps.LatLng(37.5191919, 127.1218508),
	new kakao.maps.LatLng(37.580214, 126.9685074),
	new kakao.maps.LatLng(37.5790717, 126.9864223),
	new kakao.maps.LatLng(37.447357, 126.7316373),
];
var ESTJPositions = [ 
	new kakao.maps.LatLng(37.5430781, 127.0418038),
	new kakao.maps.LatLng(37.5646834, 126.9813312),
	new kakao.maps.LatLng(37.512561, 127.0587766),
	new kakao.maps.LatLng(37.5497282, 126.91481),
	new kakao.maps.LatLng(37.5408603, 127.0024875),
	new kakao.maps.LatLng(37.5774224, 126.9769689),
	new kakao.maps.LatLng(37.5262068, 126.9281499),
	new kakao.maps.LatLng(37.5296317, 126.9646109),
	new kakao.maps.LatLng(37.5360402, 126.8971649),
	new kakao.maps.LatLng(37.5262068, 126.9281499),
	new kakao.maps.LatLng(37.5855828, 126.9776724),
	new kakao.maps.LatLng(37.5276108, 126.9319425),
	new kakao.maps.LatLng(37.5790717, 126.9864223),
	new kakao.maps.LatLng(37.6010128, 126.9771329),
	new kakao.maps.LatLng(37.580214, 126.9685074),
	new kakao.maps.LatLng(37.5744698, 126.9835526),
	new kakao.maps.LatLng(37.5276108, 126.9319425),
];
var ESTPPositions = [ 
	new kakao.maps.LatLng(37.5001418, 127.0283967),
	new kakao.maps.LatLng(37.5430781, 127.0418038),
	new kakao.maps.LatLng(37.5239431, 127.0355548),
	new kakao.maps.LatLng(37.5216816, 126.9892355),
	new kakao.maps.LatLng(37.5584424, 126.9702677),
	new kakao.maps.LatLng(37.5511249, 126.9878647),
	new kakao.maps.LatLng(37.5842706, 127.030384),
	new kakao.maps.LatLng(37.5430781, 127.0418038),
	new kakao.maps.LatLng(37.5293686, 127.0739751),
	new kakao.maps.LatLng(37.5293686, 127.0739751),
	new kakao.maps.LatLng(37.532202, 126.973129),
	new kakao.maps.LatLng(37.5451078, 126.9838835),
	new kakao.maps.LatLng(37.545871, 126.9216105),
	new kakao.maps.LatLng(37.5774224, 126.9769689),
	new kakao.maps.LatLng(37.5779424, 126.9860754),
];
var INFJPositions = [ 
	new kakao.maps.LatLng(37.5686977, 126.8338364),
	new kakao.maps.LatLng(37.5262068, 126.9281499),
	new kakao.maps.LatLng(37.5413978, 126.9872947),
	new kakao.maps.LatLng(37.5776925, 126.9884449),
	new kakao.maps.LatLng(37.5139107, 127.0406271),
	new kakao.maps.LatLng(37.5793047, 127.0390528),
	new kakao.maps.LatLng(37.5722501, 126.9758963),
	new kakao.maps.LatLng(37.5561666, 126.9055945),
	new kakao.maps.LatLng(37.6067352, 127.0929387),
	new kakao.maps.LatLng(37.5237192, 126.9799539),
	new kakao.maps.LatLng(37.5802866, 126.9925648),
	new kakao.maps.LatLng(37.5627369, 126.974023),
	new kakao.maps.LatLng(37.5651747, 126.9309197),
	new kakao.maps.LatLng(37.5367828, 127.0008559),
	new kakao.maps.LatLng(37.5262068, 126.9281499),
	new kakao.maps.LatLng(37.5774224, 126.9769689),
	new kakao.maps.LatLng(37.5623336, 126.982597),
	new kakao.maps.LatLng(37.5815844, 127.0000197),
	new kakao.maps.LatLng(37.5802866, 126.9925648),
	new kakao.maps.LatLng(37.5411649, 127.0604992),
	new kakao.maps.LatLng(37.5432327, 127.0576556),
	new kakao.maps.LatLng(37.5650717, 126.9929848),
	new kakao.maps.LatLng(37.588011, 127.0560836),
	new kakao.maps.LatLng(37.5588702, 126.9242754),
	new kakao.maps.LatLng(37.5687099, 127.0087157),
];
var INFPPositions = [ 
	new kakao.maps.LatLng(37.5042361, 126.9488336),
	new kakao.maps.LatLng(37.4779159, 126.9548441),
	new kakao.maps.LatLng(37.5459372, 126.9828878),
	new kakao.maps.LatLng(37.4806329, 126.979104),
	new kakao.maps.LatLng(37.5306051, 126.9697906),
	new kakao.maps.LatLng(37.4713225, 127.0367514),
	new kakao.maps.LatLng(37.5722501, 126.9758963),
	new kakao.maps.LatLng(37.4930329, 126.9204935),
	new kakao.maps.LatLng(37.5114215, 127.0974981),
	new kakao.maps.LatLng(37.5293686, 127.0739751),
	new kakao.maps.LatLng(37.5430781, 127.0418038),
	new kakao.maps.LatLng(37.5178196, 126.9708601),
	new kakao.maps.LatLng(37.5326105, 126.9901968),
	new kakao.maps.LatLng(37.5129211, 127.1027399),
	new kakao.maps.LatLng(37.5827972, 126.9858623),
	new kakao.maps.LatLng(37.5430781, 127.0418038),
	new kakao.maps.LatLng(37.5041332, 127.0250877),
	new kakao.maps.LatLng(37.5296317, 126.9646109),
	new kakao.maps.LatLng(37.5774224, 126.9769689),
	new kakao.maps.LatLng(37.5411531, 127.0590057),
	new kakao.maps.LatLng(37.5131943, 127.0762224),
	new kakao.maps.LatLng(37.5654946, 126.9224936),
	new kakao.maps.LatLng(37.5648015, 126.9762359),
	new kakao.maps.LatLng(37.5752228, 127.0128294),
	new kakao.maps.LatLng(37.5722501, 126.9758963),
	new kakao.maps.LatLng(37.5671687, 127.0097436),
	new kakao.maps.LatLng(37.5430443, 127.0554966),
	new kakao.maps.LatLng(37.5297982, 127.0678828),
	new kakao.maps.LatLng(37.5276108, 126.9319425),
	new kakao.maps.LatLng(37.5561666, 126.9055945),
];
var INTJPositions = [ 
	new kakao.maps.LatLng(37.5238057, 126.8734634),
	new kakao.maps.LatLng(37.5119544, 127.0882842),
	new kakao.maps.LatLng(37.5716981, 126.9860581),
	new kakao.maps.LatLng(37.5483274, 127.0435586),
	new kakao.maps.LatLng(37.5443744, 126.9116965),
];
var INTPPositions = [ 
	new kakao.maps.LatLng(37.6212213, 127.0413228),
	new kakao.maps.LatLng(37.5128096, 127.0571899),
	new kakao.maps.LatLng(37.5641128, 126.9737099),
	new kakao.maps.LatLng(37.5409571, 127.0570279),
	new kakao.maps.LatLng(37.5994599, 127.0773198),
	new kakao.maps.LatLng(37.5643336, 126.9275926),
	new kakao.maps.LatLng(37.5788415, 126.9806176),
	new kakao.maps.LatLng(37.5430781, 127.0418038),
	new kakao.maps.LatLng(37.5263723, 127.0450835),
	new kakao.maps.LatLng(37.6380965, 126.9330821),
	new kakao.maps.LatLng(37.5119544, 127.0882842),
	new kakao.maps.LatLng(37.5430781, 127.0418038),
	new kakao.maps.LatLng(37.516634, 127.0189523),
	new kakao.maps.LatLng(37.5788415, 126.9806176),
	new kakao.maps.LatLng(37.568395, 126.930319),
];
var ISFJPositions = [ 
	new kakao.maps.LatLng(37.5445013, 126.8933512),
	new kakao.maps.LatLng(37.5564817, 126.9045939),
	new kakao.maps.LatLng(37.5427237, 126.9017626),
	new kakao.maps.LatLng(37.5772035, 126.9881685),
	new kakao.maps.LatLng(37.5276108, 126.9319425),
	new kakao.maps.LatLng(37.5212572, 127.0343563),
	new kakao.maps.LatLng(37.527562, 127.0429074),
	new kakao.maps.LatLng(37.5119544, 127.0882842),
	new kakao.maps.LatLng(37.5128096, 127.0571899),
	new kakao.maps.LatLng(37.5704851, 126.9708264),
	new kakao.maps.LatLng(37.5430781, 127.0418038),
	new kakao.maps.LatLng(37.5541305, 126.9124374),
	new kakao.maps.LatLng(37.5573446, 126.9141224),
	new kakao.maps.LatLng(37.5430781, 127.0418038),
	new kakao.maps.LatLng(37.5172425, 126.9037198),
	new kakao.maps.LatLng(37.5430781, 127.0418038),
	new kakao.maps.LatLng(37.5262068, 126.9281499),
	new kakao.maps.LatLng(37.5462544, 126.985192),
	new kakao.maps.LatLng(37.5788415, 126.9806176),
	new kakao.maps.LatLng(37.5723333, 127.0088602),
	new kakao.maps.LatLng(37.580214, 126.9685074),
	new kakao.maps.LatLng(37.5760796, 127.008618),
	new kakao.maps.LatLng(37.5430781, 127.0418038),
	new kakao.maps.LatLng(37.5409571, 127.0570279),
];
var ISFPPositions = [ 
	new kakao.maps.LatLng(37.535887, 127.000404),
	new kakao.maps.LatLng(37.543996, 126.9474834),
	new kakao.maps.LatLng(37.5276108, 126.9319425),
	new kakao.maps.LatLng(37.5262068, 126.9281499),
	new kakao.maps.LatLng(37.5119544, 127.0882842),
	new kakao.maps.LatLng(37.5845074, 126.963874),
	new kakao.maps.LatLng(37.5276108, 126.9319425),
	new kakao.maps.LatLng(37.5430781, 127.0418038),
	new kakao.maps.LatLng(37.5175144, 126.9586585),
	new kakao.maps.LatLng(37.5385066, 126.9990564),
	new kakao.maps.LatLng(37.5688358, 126.9948359),
	new kakao.maps.LatLng(37.5128096, 127.0571899),
];
var ISTJPositions = [ 
	new kakao.maps.LatLng(37.5216816, 126.9892355),
	new kakao.maps.LatLng(37.5661304, 127.0590538),
	new kakao.maps.LatLng(37.557237, 126.9250119),
	new kakao.maps.LatLng(37.508471, 126.8887823),
	new kakao.maps.LatLng(37.5540315, 126.9163774),
	new kakao.maps.LatLng(37.5880599, 126.980707),
	new kakao.maps.LatLng(37.5370003, 127.0010001),
	new kakao.maps.LatLng(37.5430271, 127.0455161),
	new kakao.maps.LatLng(37.5845074, 126.963874),
	new kakao.maps.LatLng(37.5089009, 126.9951198),
	new kakao.maps.LatLng(37.5001002, 127.025536),
	new kakao.maps.LatLng(37.5119544, 127.0882842),
	new kakao.maps.LatLng(37.5608233, 126.9736305),
	new kakao.maps.LatLng(37.6212213, 127.0413228),
];
var ISTPPositions = [ 
	new kakao.maps.LatLng(37.6474133, 127.0636386),
	new kakao.maps.LatLng(37.5119544, 127.0882842),
	new kakao.maps.LatLng(37.587992, 127.0604884),
	new kakao.maps.LatLng(37.5628502, 126.9469805),
	new kakao.maps.LatLng(37.5557878, 126.893954),
	new kakao.maps.LatLng(37.5523473, 126.8998898),
	new kakao.maps.LatLng(37.5430781, 127.0418038),
	new kakao.maps.LatLng(37.5262068, 126.9281499),
	new kakao.maps.LatLng(37.5129211, 127.1027399),
	new kakao.maps.LatLng(37.5119544, 127.0882842),
	new kakao.maps.LatLng(37.5523473, 126.8998898),
	new kakao.maps.LatLng(37.5276108, 126.9319425),
	new kakao.maps.LatLng(37.5430781, 127.0418038),
	new kakao.maps.LatLng(37.5283926, 127.0724711),
	new kakao.maps.LatLng(37.5805942, 127.0065316),
	new kakao.maps.LatLng(37.5788415, 126.9806176),
];
// // 커피숍 마커가 표시될 좌표 배열입니다
// var coffeePositions = [ 
//     new kakao.maps.LatLng(37.499590490909185, 127.0263723554437),
//     new kakao.maps.LatLng(37.499427948430814, 127.02794423197847),
//     new kakao.maps.LatLng(37.498553760499505, 127.02882598822454),
//     new kakao.maps.LatLng(37.497625593121384, 127.02935713582038),
//     new kakao.maps.LatLng(37.49646391248451, 127.02675574250912),
//     new kakao.maps.LatLng(37.49629291770947, 127.02587362608637),
//     new kakao.maps.LatLng(37.49754540521486, 127.02546694890695)                
// ];

// // 편의점 마커가 표시될 좌표 배열입니다
// var storePositions = [
//     new kakao.maps.LatLng(37.497535461505684, 127.02948149502778),
//     new kakao.maps.LatLng(37.49671536281186, 127.03020491448352),
//     new kakao.maps.LatLng(37.496201943633714, 127.02959405469642),
//     new kakao.maps.LatLng(37.49640072567703, 127.02726459882308),
//     new kakao.maps.LatLng(37.49640098874988, 127.02609983175294),
//     new kakao.maps.LatLng(37.49932849491523, 127.02935780247945),
//     new kakao.maps.LatLng(37.49996818951873, 127.02943721562295)
// ];

// // 주차장 마커가 표시될 좌표 배열입니다
// var carparkPositions = [
//     new kakao.maps.LatLng(37.49966168796031, 127.03007039430118),
//     new kakao.maps.LatLng(37.499463762912974, 127.0288828824399),
//     new kakao.maps.LatLng(37.49896834100913, 127.02833986892401),
//     new kakao.maps.LatLng(37.49893267508434, 127.02673400572665),
//     new kakao.maps.LatLng(37.49872543597439, 127.02676785815386),
//     new kakao.maps.LatLng(37.49813096097184, 127.02591949495914),
//     new kakao.maps.LatLng(37.497680616783086, 127.02518427952202)                       
// ];    



// var markerImageSrc="https://cfile181.uf.daum.net/image/250649365602043421936D"

var markerImageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";  // 노란색 마커이미지

// var markerImageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png';  // 마커이미지의 주소입니다. 스프라이트 이미지 입니다
    

    ENFJMarkers = [],
    ENFPMarkers = [],
    ENTJMarkers = [],
    ENTPMarkers = [],
    ESFJMarkers = [],
    ESFPMarkers = [],
    ESTJMarkers = [],
    ESTPMarkers = [],
    INFJMarkers = [],
    INFPMarkers = [],
    INTJMarkers = [],
    INTPMarkers = [],
    ISFJMarkers = [],
    ISFPMarkers = [],
    ISTJMarkers = [],
    ISTPMarkers = [];
    
// createCoffeeMarkers(); // 커피숍 마커를 생성하고 커피숍 마커 배열에 추가합니다
// createStoreMarkers(); // 편의점 마커를 생성하고 편의점 마커 배열에 추가합니다
// createCarparkMarkers(); // 주차장 마커를 생성하고 주차장 마커 배열에 추가합니다
createENFJMarkers();
createENFPMarkers();
createENTJMarkers();
createENTPMarkers();
createESFJMarkers();
createESFPMarkers();
createESTJMarkers();
createESTPMarkers();
createINFJMarkers();
createINFPMarkers();
createINTJMarkers();
createINTPMarkers();
createISFJMarkers();
createISFPMarkers();
createISTJMarkers();
createISTPMarkers();

changeMarker('enfj', 'enfj'); // 지도에 커피숍 마커가 보이도록 설정합니다    
var ISTPcontents = ['<div class="wrap">    <div class="info">        <div class="title">당현천 근린공원            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">상계동</div>                <div class="jibun ellipsis">표준신주소 : 서울특별시 노원구 동일로 1328-1</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">석촌호수            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">잠실동</div>                <div class="jibun ellipsis">표준신주소 : nan</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">호시타코야끼            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">휘경동</div>                <div class="jibun ellipsis">표준신주소 : 서울특별시 동대문구 망우로18가길 52</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">이화여자대학교            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">대현동</div>                <div class="jibun ellipsis">표준신주소 : 서울특별시 서대문구 이화여대길 52</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">망원스타벅스            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">망원동</div>                <div class="jibun ellipsis">표준신주소 : 서울특별시 마포구 마포나루길 407</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">망원한강공원            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">망원동</div>                <div class="jibun ellipsis">표준신주소 : 서울특별시 마포구 마포나루길 467</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">서울숲            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">성수동1가</div>                <div class="jibun ellipsis">표준신주소 : 서울특별시 성동구 뚝섬로 273</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">더현대 서울            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">여의도동</div>                <div class="jibun ellipsis">표준신주소 : 서울특별시 영등포구 여의대로 108</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">롯데월드타워            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">신천동</div>                <div class="jibun ellipsis">표준신주소 : 서울특별시 송파구 올림픽로 300</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">석촌호수            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">잠실동</div>                <div class="jibun ellipsis">표준신주소 : nan</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">망원한강공원            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">망원동</div>                <div class="jibun ellipsis">표준신주소 : 서울특별시 마포구 마포나루길 467</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">여의도 한강공원            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">여의도동</div>                <div class="jibun ellipsis">표준신주소 : 서울특별시 영등포구 여의동로 330</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">서울숲            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">성수동1가</div>                <div class="jibun ellipsis">표준신주소 : 서울특별시 성동구 뚝섬로 273</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">뚝섬            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">자양동</div>                <div class="jibun ellipsis">표준신주소 : nan</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">낙산공원            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">동숭동</div>                <div class="jibun ellipsis">표준신주소 : 서울특별시 종로구 낙산길 41</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">국립현대미술관            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">소격동</div>                <div class="jibun ellipsis">표준신주소 : 서울특별시 종로구 삼청로 30</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">카페무네            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">nan</div>                <div class="jibun ellipsis">표준신주소 : nan</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>']
var ISTJcontents = ['<div class="wrap">    <div class="info">        <div class="title">용산공원            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">용산동6가</div>                <div class="jibun ellipsis">표준신주소 : 서울특별시 용산구 서빙고로 221</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">분짜킴            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">답십리동</div>                <div class="jibun ellipsis">표준신주소 : 서울특별시 동대문구 황물로15다길 4</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">하이디라오 홍대            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">동교동</div>                <div class="jibun ellipsis">표준신주소 : 서울특별시 마포구 양화로 176</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">신도림 현대백화점            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">신도림동</div>                <div class="jibun ellipsis">표준신주소 : 서울특별시 구로구 경인로 662</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">콤파일            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">서교동</div>                <div class="jibun ellipsis">표준신주소 : 서울특별시 마포구 잔다리로 73</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">뮤지엄한미            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">삼청동</div>                <div class="jibun ellipsis">표준신주소 : 서울특별시 종로구 삼청로9길 45</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">맥심플랜트            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">한남동</div>                <div class="jibun ellipsis">표준신주소 : 서울특별시 용산구 이태원로 250</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">단일서울            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">성수동1가</div>                <div class="jibun ellipsis">표준신주소 : 서울특별시 성동구 왕십리로 66-33</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">더숲초소책방            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">옥인동</div>                <div class="jibun ellipsis">표준신주소 : 서울특별시 종로구 인왕산로 172</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">반포한강공원            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">반포동</div>                <div class="jibun ellipsis">표준신주소 : 서울특별시 서초구 신반포로11길 40</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">강남역 스타벅스            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">서초동</div>                <div class="jibun ellipsis">표준신주소 : 서울특별시 서초구 서초대로77길 27</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">석촌호수            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">잠실동</div>                <div class="jibun ellipsis">표준신주소 : nan</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">스타벅스 서울 상공회의소            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">남대문로4가</div>                <div class="jibun ellipsis">표준신주소 : 서울특별시 중구 세종대로 39</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">북서울꿈의숲            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">번동</div>                <div class="jibun ellipsis">표준신주소 : 서울특별시 강북구 월계로 173</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>',
'<div class="wrap">    <div class="info">        <div class="title">스타벅스 경동1960점            <div class="close" onclick="closeOverlay()" title="닫기"></div>        </div>        <div class="body">            <div class="desc">                <div class="ellipsis">nan</div>                <div class="jibun ellipsis">표준신주소 : nan</div>                <div><a href="https://map.kakao.com/link/map/카카오,37.402056,127.108212" target="_blank" class="link">큰지도보기</a> <a href="https://map.kakao.com/link/to/카카오,37.402056,127.108212" target="_blank" class="link">길찾기</a></div>            </div>        </div>    </div></div>']
// 마커이미지의 주소와, 크기, 옵션으로 마커 이미지를 생성하여 리턴하는 함수입니다
function createMarkerImage(src, size, options) {
    var markerImage = new kakao.maps.MarkerImage(src, size, options);
    return markerImage;            
}

// 좌표와 마커이미지를 받아 마커를 생성하여 리턴하는 함수입니다
function createMarker(position, image, contents) {
    var marker = new kakao.maps.Marker({
        position: position,
        image: image,
        title: contents

    });

    return marker;  
}   

// mbti 별 createMBTIMarkers 함수


// 마커 설정
function createENFJMarkers() {
	for (var i = 0; i <ENFJPositions.length; i++) {
		var imageSize = new kakao.maps.Size(24,35),
			imageOptions = {
				// spriteOrigin: new kakao.maps.Point(10, 0),
				// spriteSize: new kakao.maps.Size(36, 98)
			};


		var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),
			marker = createMarker(ENFJPositions[i], markerImage);

            // kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));

		ENFJMarkers.push(marker);
	}
}


function setENFJMarkers(map) {
	for (var i = 0; i <ENFJMarkers.length; i++) {
		ENFJMarkers[i].setMap(map);
        // kakao.maps.event.addListener(ENFJMarkers[i], 'mouseover', makeOverListener(map, ENFJMarkers[i], infowindow));
	}
}
function createENFPMarkers() {
	for (var i = 0; i <ENFPPositions.length; i++) {
		var imageSize = new kakao.maps.Size(24,35),
			imageOptions = {
				// spriteOrigin: new kakao.maps.Point(10, 0),
				// spriteSize: new kakao.maps.Size(36, 98)
			};


		var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),
			marker = createMarker(ENFPPositions[i], markerImage);


		ENFPMarkers.push(marker);
	}
}


function setENFPMarkers(map) {
	for (var i = 0; i <ENFPMarkers.length; i++) {
		ENFPMarkers[i].setMap(map);
	}
}
function createENTJMarkers() {
	for (var i = 0; i <ENTJPositions.length; i++) {
		var imageSize = new kakao.maps.Size(24,35),
			imageOptions = {
				// spriteOrigin: new kakao.maps.Point(10, 0),
				// spriteSize: new kakao.maps.Size(36, 98)
			};


		var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),
			marker = createMarker(ENTJPositions[i], markerImage);


		ENTJMarkers.push(marker);
	}
}


function setENTJMarkers(map) {
	for (var i = 0; i <ENTJMarkers.length; i++) {
		ENTJMarkers[i].setMap(map);
	}
}
function createENTPMarkers() {
	for (var i = 0; i <ENTPPositions.length; i++) {
		var imageSize = new kakao.maps.Size(24,35),
			imageOptions = {
				// spriteOrigin: new kakao.maps.Point(10, 0),
				// spriteSize: new kakao.maps.Size(36, 98)
			};


		var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),
			marker = createMarker(ENTPPositions[i], markerImage);


		ENTPMarkers.push(marker);
	}
}


function setENTPMarkers(map) {
	for (var i = 0; i <ENTPMarkers.length; i++) {
		ENTPMarkers[i].setMap(map);
	}
}
function createESFJMarkers() {
	for (var i = 0; i <ESFJPositions.length; i++) {
		var imageSize = new kakao.maps.Size(24,35),
			imageOptions = {
				// spriteOrigin: new kakao.maps.Point(10, 0),
				// spriteSize: new kakao.maps.Size(36, 98)
			};


		var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),
			marker = createMarker(ESFJPositions[i], markerImage);


		ESFJMarkers.push(marker);
	}
}


function setESFJMarkers(map) {
	for (var i = 0; i <ESFJMarkers.length; i++) {
		ESFJMarkers[i].setMap(map);
	}
}
function createESFPMarkers() {
	for (var i = 0; i <ESFPPositions.length; i++) {
		var imageSize = new kakao.maps.Size(24,35),
			imageOptions = {
				// spriteOrigin: new kakao.maps.Point(10, 0),
				// spriteSize: new kakao.maps.Size(36, 98)
			};


		var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),
			marker = createMarker(ESFPPositions[i], markerImage);


		ESFPMarkers.push(marker);
	}
}



function setESFPMarkers(map) {
	for (var i = 0; i <ESFPMarkers.length; i++) {
		ESFPMarkers[i].setMap(map);
	}
}
function createESTJMarkers() {
	for (var i = 0; i <ESTJPositions.length; i++) {
		var imageSize = new kakao.maps.Size(24,35),
			imageOptions = {
				// spriteOrigin: new kakao.maps.Point(10, 0),
				// spriteSize: new kakao.maps.Size(36, 98)
			};


		var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),
			marker = createMarker(ESTJPositions[i], markerImage);


		ESTJMarkers.push(marker);
	}
}


function setESTJMarkers(map) {
	for (var i = 0; i <ESTJMarkers.length; i++) {
		ESTJMarkers[i].setMap(map);
	}
}
function createESTPMarkers() {
	for (var i = 0; i <ESTPPositions.length; i++) {
		var imageSize = new kakao.maps.Size(24,35),
			imageOptions = {
				// spriteOrigin: new kakao.maps.Point(10, 0),
				// spriteSize: new kakao.maps.Size(36, 98)
			};


		var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),
			marker = createMarker(ESTPPositions[i], markerImage);


		ESTPMarkers.push(marker);
	}
}


function setESTPMarkers(map) {
	for (var i = 0; i <ESTPMarkers.length; i++) {
		ESTPMarkers[i].setMap(map);
	}
}
function createINFJMarkers() {
	for (var i = 0; i <INFJPositions.length; i++) {
		var imageSize = new kakao.maps.Size(24,35),
			imageOptions = {
				// spriteOrigin: new kakao.maps.Point(10, 0),
				// spriteSize: new kakao.maps.Size(36, 98)
			};


		var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),
			marker = createMarker(INFJPositions[i], markerImage);


		INFJMarkers.push(marker);
	}
}


function setINFJMarkers(map) {
	for (var i = 0; i <INFJMarkers.length; i++) {
		INFJMarkers[i].setMap(map);
	}
}
function createINFPMarkers() {
	for (var i = 0; i <INFPPositions.length; i++) {
		var imageSize = new kakao.maps.Size(24,35),
			imageOptions = {
				// spriteOrigin: new kakao.maps.Point(10, 0),
				// spriteSize: new kakao.maps.Size(36, 98)
			};


		var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),
			marker = createMarker(INFPPositions[i], markerImage);


		INFPMarkers.push(marker);
	}
}


function setINFPMarkers(map) {
	for (var i = 0; i <INFPMarkers.length; i++) {
		INFPMarkers[i].setMap(map);
	}
}
function createINTJMarkers() {
	for (var i = 0; i <INTJPositions.length; i++) {
		var imageSize = new kakao.maps.Size(24,35),
			imageOptions = {
				// spriteOrigin: new kakao.maps.Point(10, 0),
				// spriteSize: new kakao.maps.Size(36, 98)
			};


		var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),
			marker = createMarker(INTJPositions[i], markerImage);


		INTJMarkers.push(marker);
	}
}


function setINTJMarkers(map) {
	for (var i = 0; i <INTJMarkers.length; i++) {
		INTJMarkers[i].setMap(map);
	}
}
function createINTPMarkers() {
	for (var i = 0; i <INTPPositions.length; i++) {
		var imageSize = new kakao.maps.Size(24,35),
			imageOptions = {
				// spriteOrigin: new kakao.maps.Point(10, 0),
				// spriteSize: new kakao.maps.Size(36, 98)
			};


		var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),
			marker = createMarker(INTPPositions[i], markerImage);


		INTPMarkers.push(marker);
	}
}


function setINTPMarkers(map) {
	for (var i = 0; i <INTPMarkers.length; i++) {
		INTPMarkers[i].setMap(map);
	}
}
function createISFJMarkers() {
	for (var i = 0; i <ISFJPositions.length; i++) {
		var imageSize = new kakao.maps.Size(24,35),
			imageOptions = {
				// spriteOrigin: new kakao.maps.Point(10, 0),
				// spriteSize: new kakao.maps.Size(36, 98)
			};


		var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),
			marker = createMarker(ISFJPositions[i], markerImage);


		ISFJMarkers.push(marker);
	}
}

function setENFJMarkers(map) {
    for (var i = 0; i <ENFJMarkers.length; i++) {
        ENFJMarkers[i].setMap(map);
    }
}

function setISFJMarkers(map) {
	for (var i = 0; i <ISFJMarkers.length; i++) {
		ISFJMarkers[i].setMap(map);
	}
}
function createISFPMarkers() {
	for (var i = 0; i <ISFPPositions.length; i++) {
		var imageSize = new kakao.maps.Size(24,35),
			imageOptions = {
				// spriteOrigin: new kakao.maps.Point(10, 0),
				// spriteSize: new kakao.maps.Size(36, 98)
			};


		var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),
			marker = createMarker(ISFPPositions[i], markerImage);


		ISFPMarkers.push(marker);
	}
}


function setISFPMarkers(map) {
	for (var i = 0; i <ISFPMarkers.length; i++) {
		ISFPMarkers[i].setMap(map);
	}
}
function createISTJMarkers() {
	for (var i = 0; i <ISTJPositions.length; i++) {
		var imageSize = new kakao.maps.Size(24,35),
			imageOptions = {
				// spriteOrigin: new kakao.maps.Point(10, 0),
				// spriteSize: new kakao.maps.Size(36, 98)
			};
        

		var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),
			marker = createMarker(ISTJPositions[i], markerImage);


		ISTJMarkers.push(marker);
	}
}
function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}

function setISTJMarkers(map) {
	for (var i = 0; i <ISTJMarkers.length; i++) {
		ISTJMarkers[i].setMap(map);
	}
}
function createISTPMarkers() {
	for (var i = 0; i <ISTPPositions.length; i++) {
		var imageSize = new kakao.maps.Size(24,35),
			imageOptions = {
				// spriteOrigin: new kakao.maps.Point(10, 0),
				// spriteSize: new kakao.maps.Size(36, 98)
			};


		var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),
			marker = createMarker(ISTPPositions[i], markerImage, ISTPcontents);
        
            // var infowindow = new kakao.maps.InfoWindow({
            //     content: contents[i] // 인포윈도우에 표시할 내용
            // });
		ISTPMarkers.push(marker);
        // kakao.maps.event.addListener(ISTPMarkers[i], 'mouseover', makeOverListener(map, ISTPMarkers[i], infowindow));
	}
}


function setISTPMarkers(map) {
	for (var i = 0; i <ISTPMarkers.length; i++) {
		ISTPMarkers[i].setMap(map);
	}
}

setTimeout()
setTimeout(function() {
    console.log('Works!');
  }, 500);


// // 커피숍 마커를 생성하고 커피숍 마커 배열에 추가하는 함수입니다
// function createCoffeeMarkers() {
    
//     for (var i = 0; i < coffeePositions.length; i++) {  
        
//         var imageSize = new kakao.maps.Size(24,35),
//             imageOptions = {  
//                 spriteOrigin: new kakao.maps.Point(10, 0),    
//                 spriteSize: new kakao.maps.Size(36, 98)  
//             };     
        
//         // 마커이미지와 마커를 생성합니다
//         var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),    
//             marker = createMarker(coffeePositions[i], markerImage);  
        
//         // 생성된 마커를 커피숍 마커 배열에 추가합니다
//         coffeeMarkers.push(marker);
//     }     
// }

// // 커피숍 마커들의 지도 표시 여부를 설정하는 함수입니다
// function setCoffeeMarkers(map) {        
//     for (var i = 0; i < coffeeMarkers.length; i++) {  
//         coffeeMarkers[i].setMap(map);
//     }        
// }

// // 편의점 마커를 생성하고 편의점 마커 배열에 추가하는 함수입니다
// function createStoreMarkers() {
//     for (var i = 0; i < storePositions.length; i++) {
        
//         var imageSize = new kakao.maps.Size(22, 26),
//             imageOptions = {   
//                 spriteOrigin: new kakao.maps.Point(10, 36),    
//                 spriteSize: new kakao.maps.Size(36, 98)  
//             };       
     
//         // 마커이미지와 마커를 생성합니다
//         var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),    
//             marker = createMarker(storePositions[i], markerImage);  

//         // 생성된 마커를 편의점 마커 배열에 추가합니다
//         storeMarkers.push(marker);    
//     }        
// }

// // 편의점 마커들의 지도 표시 여부를 설정하는 함수입니다
// function setStoreMarkers(map) {        
//     for (var i = 0; i < storeMarkers.length; i++) {  
//         storeMarkers[i].setMap(map);
//     }        
// }

// // 주차장 마커를 생성하고 주차장 마커 배열에 추가하는 함수입니다
// function createCarparkMarkers() {
//     for (var i = 0; i < carparkPositions.length; i++) {
        
//         var imageSize = new kakao.maps.Size(22, 26),
//             imageOptions = {   
//                 spriteOrigin: new kakao.maps.Point(10, 72),    
//                 spriteSize: new kakao.maps.Size(36, 98)  
//             };       
     
//         // 마커이미지와 마커를 생성합니다
//         var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),    
//             marker = createMarker(carparkPositions[i], markerImage);  

//         // 생성된 마커를 주차장 마커 배열에 추가합니다
//         carparkMarkers.push(marker);        
//     }                
// }

// // 주차장 마커들의 지도 표시 여부를 설정하는 함수입니다
// function setCarparkMarkers(map) {        
//     for (var i = 0; i < carparkMarkers.length; i++) {  
//         carparkMarkers[i].setMap(map);
//     }        
// }

// 카테고리를 클릭했을 때 type에 따라 카테고리의 스타일과 지도에 표시되는 마커를 변경합니다
function changeMarker(type, beforeType) {
    // if (type !== beforeType) {
    //     // beforType 을 카테고리에서 제거합니다
    //     var beforeTypeMenu = document.getElementById(beforeType + 'Menu');
    //         beforeTypeMenu.className = '';  

    //     // type을 카테고리에 추가합니다
    //     var typeMenu = document.getElementById(type + 'Menu');
    //     typeMenu.className = 'menu_selected';

    //     // type에 해당하는 마커만 지도에 표시하고 나머지는 지도에서 제거합니다
    
    //     setISTPMarkers(null);
    //     setENFJMarkers(null);
    //     setENFPMarkers(null);
    //     setENTJMarkers(null);
    //     setENTPMarkers(null);
    //     setESFJMarkers(null);
    //     setESFPMarkers(null);
    //     setESTJMarkers(null);
    //     setESTPMarkers(null);
    //     setINFJMarkers(null);
    //     setINFPMarkers(null);
    //     setINTJMarkers(null);
    //     setINTPMarkers(null);
    //     setISFJMarkers(null);
    //     setISFPMarkers(null);
    //     setISTJMarkers(null);
        
    //     if (type === 'ISTP') {
    //         setISTPMarkers(map);
    //     } else if (type === 'ENFJ') {
    //         setENFJMarkers(map);
    //     } else if (type === 'ENFP') {
    //         setENFPMarkers(map);
    //     } else if (type === 'ENTJ') {
    //         setENTJMarkers(map);
    //     } else if (type === 'ENTP') {
    //         setENTPMarkers(map);
    //     } else if (type === 'ESFJ') {
    //         setESFJMarkers(map);
    //     } else if (type === 'ESFP') {
    //         setESFPMarkers(map);
    //     } else if (type === 'ESTJ') {
    //         setESTJMarkers(map);
    //     } else if (type === 'ESTP') {
    //         setESTPMarkers(map);
    //     } else if (type === 'INFJ') {
    //         setINFJMarkers(map);
    //     } else if (type === 'INFP') {
    //         setINFPMarkers(map);
    //     } else if (type === 'INTJ') {
    //         setINTJMarkers(map);
    //     } else if (type === 'INTP') {
    //         setINTPMarkers(map);
    //     } else if (type === 'ISFJ') {
    //         setISFJMarkers(map);
    //     } else if (type === 'ISFP') {
    //         setISFPMarkers(map);
    //     } else if (type === 'ISTJ') {
    //         setISTJMarkers(map);
    //     }
    // } else {
    
    var ENFJMenu = document.getElementById('ENFJMenu');
    var ENFPMenu = document.getElementById('ENFPMenu');
    var ENTJMenu = document.getElementById('ENTJMenu');
    var ENTPMenu = document.getElementById('ENTPMenu');
    var ESFJMenu = document.getElementById('ESFJMenu');
    var ESFPMenu = document.getElementById('ESFPMenu');
    var ESTJMenu = document.getElementById('ESTJMenu');
    var ESTPMenu = document.getElementById('ESTPMenu');
    var INFJMenu = document.getElementById('INFJMenu');
    var INFPMenu = document.getElementById('INFPMenu');
    var INTJMenu = document.getElementById('INTJMenu');
    var INTPMenu = document.getElementById('INTPMenu');
    var ISFJMenu = document.getElementById('ISFJMenu');
    var ISFPMenu = document.getElementById('ISFPMenu');
    var ISTJMenu = document.getElementById('ISTJMenu');
    var ISTPMenu = document.getElementById('ISTPMenu');

    if (type === 'enfj') {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div

            mapOption = {
                center: new kakao.maps.LatLng(37.598004414546934, 126.97770621963765), // 지도의 중심좌표
                level: 8 // 지도의 확대 레벨
            };
        // 기존 맵 초기화 및 새 맵 생성
        map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        ENFJMenu.className = 'menu_selected';
        ENFPMenu.className = '';
        ENTJMenu.className = '';
        ENTPMenu.className = '';
        ESFJMenu.className = '';
        ESFPMenu.className = '';
        ESTJMenu.className = '';
        ESTPMenu.className = '';
        INFJMenu.className = '';
        INFPMenu.className = '';
        INTJMenu.className = '';
        INTPMenu.className = '';
        ISFJMenu.className = '';
        ISFPMenu.className = '';
        ISTJMenu.className = '';
        ISTPMenu.className = '';
        
        setENFJMarkers(map);
        setENFPMarkers(null);
        setENTJMarkers(null);
        setENTPMarkers(null);
        setESFJMarkers(null);
        setESFPMarkers(null);
        setESTJMarkers(null);
        setESTPMarkers(null);
        setINFJMarkers(null);
        setINFPMarkers(null);
        setINTJMarkers(null);
        setINTPMarkers(null);
        setISFJMarkers(null);
        setISFPMarkers(null);
        setISTJMarkers(null);
        setISTPMarkers(null);
        mouseOverPlace('enfj');
    }
    else if (type === 'enfp') {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div

            mapOption = {
                center: new kakao.maps.LatLng(37.598004414546934, 126.97770621963765), // 지도의 중심좌표
                level: 8 // 지도의 확대 레벨
            };
        // 기존 맵 초기화 및 새 맵 생성
        map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        ENFJMenu.className = '';
        ENFPMenu.className = 'menu_selected';
        ENTJMenu.className = '';
        ENTPMenu.className = '';
        ESFJMenu.className = '';
        ESFPMenu.className = '';
        ESTJMenu.className = '';
        ESTPMenu.className = '';
        INFJMenu.className = '';
        INFPMenu.className = '';
        INTJMenu.className = '';
        INTPMenu.className = '';
        ISFJMenu.className = '';
        ISFPMenu.className = '';
        ISTJMenu.className = '';
        ISTPMenu.className = '';
        setENFJMarkers(null);
        setENFPMarkers(map);
        setENTJMarkers(null);
        setENTPMarkers(null);
        setESFJMarkers(null);
        setESFPMarkers(null);
        setESTJMarkers(null);
        setESTPMarkers(null);
        setINFJMarkers(null);
        setINFPMarkers(null);
        setINTJMarkers(null);
        setINTPMarkers(null);
        setISFJMarkers(null);
        setISFPMarkers(null);
        setISTJMarkers(null);
        setISTPMarkers(null);
        mouseOverPlace('ENFP')
    }
    else if (type === 'entj') {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div

            mapOption = {
                center: new kakao.maps.LatLng(37.598004414546934, 126.97770621963765), // 지도의 중심좌표
                level: 8 // 지도의 확대 레벨
            };
        // 기존 맵 초기화 및 새 맵 생성
        map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        ENFJMenu.className = '';
        ENFPMenu.className = '';
        ENTJMenu.className = 'menu_selected';
        ENTPMenu.className = '';
        ESFJMenu.className = '';
        ESFPMenu.className = '';
        ESTJMenu.className = '';
        ESTPMenu.className = '';
        INFJMenu.className = '';
        INFPMenu.className = '';
        INTJMenu.className = '';
        INTPMenu.className = '';
        ISFJMenu.className = '';
        ISFPMenu.className = '';
        ISTJMenu.className = '';
        ISTPMenu.className = '';
        setENFJMarkers(null);
        setENFPMarkers(null);
        setENTJMarkers(map);
        setENTPMarkers(null);
        setESFJMarkers(null);
        setESFPMarkers(null);
        setESTJMarkers(null);
        setESTPMarkers(null);
        setINFJMarkers(null);
        setINFPMarkers(null);
        setINTJMarkers(null);
        setINTPMarkers(null);
        setISFJMarkers(null);
        setISFPMarkers(null);
        setISTJMarkers(null);
        setISTPMarkers(null);
        mouseOverPlace('ENTJ');
    }
    else if (type === 'entp') {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div

            mapOption = {
                center: new kakao.maps.LatLng(37.598004414546934, 126.97770621963765), // 지도의 중심좌표
                level: 8 // 지도의 확대 레벨
            };
        // 기존 맵 초기화 및 새 맵 생성
        map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        ENFJMenu.className = '';
        ENFPMenu.className = '';
        ENTJMenu.className = '';
        ENTPMenu.className = 'menu_selected';
        ESFJMenu.className = '';
        ESFPMenu.className = '';
        ESTJMenu.className = '';
        ESTPMenu.className = '';
        INFJMenu.className = '';
        INFPMenu.className = '';
        INTJMenu.className = '';
        INTPMenu.className = '';
        ISFJMenu.className = '';
        ISFPMenu.className = '';
        ISTJMenu.className = '';
        ISTPMenu.className = '';
        setENFJMarkers(null);
        setENFPMarkers(null);
        setENTJMarkers(null);
        setENTPMarkers(map);
        setESFJMarkers(null);
        setESFPMarkers(null);
        setESTJMarkers(null);
        setESTPMarkers(null);
        setINFJMarkers(null);
        setINFPMarkers(null);
        setINTJMarkers(null);
        setINTPMarkers(null);
        setISFJMarkers(null);
        setISFPMarkers(null);
        setISTJMarkers(null);
        setISTPMarkers(null);
        mouseOverPlace('ENTP');
    }
    else if (type === 'esfj') {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div

            mapOption = {
                center: new kakao.maps.LatLng(37.598004414546934, 126.97770621963765), // 지도의 중심좌표
                level: 8 // 지도의 확대 레벨
            };
        // 기존 맵 초기화 및 새 맵 생성
        map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        ENFJMenu.className = '';
        ENFPMenu.className = '';
        ENTJMenu.className = '';
        ENTPMenu.className = '';
        ESFJMenu.className = 'menu_selected';
        ESFPMenu.className = '';
        ESTJMenu.className = '';
        ESTPMenu.className = '';
        INFJMenu.className = '';
        INFPMenu.className = '';
        INTJMenu.className = '';
        INTPMenu.className = '';
        ISFJMenu.className = '';
        ISFPMenu.className = '';
        ISTJMenu.className = '';
        ISTPMenu.className = '';
        setENFJMarkers(null);
        setENFPMarkers(null);
        setENTJMarkers(null);
        setENTPMarkers(null);
        setESFJMarkers(map);
        setESFPMarkers(null);
        setESTJMarkers(null);
        setESTPMarkers(null);
        setINFJMarkers(null);
        setINFPMarkers(null);
        setINTJMarkers(null);
        setINTPMarkers(null);
        setISFJMarkers(null);
        setISFPMarkers(null);
        setISTJMarkers(null);
        setISTPMarkers(null);
        mouseOverPlace('ESFJ')
    }
    else if (type === 'esfp') {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div

            mapOption = {
                center: new kakao.maps.LatLng(37.598004414546934, 126.97770621963765), // 지도의 중심좌표
                level: 8 // 지도의 확대 레벨
            };
        // 기존 맵 초기화 및 새 맵 생성
        map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        ENFJMenu.className = '';
        ENFPMenu.className = '';
        ENTJMenu.className = '';
        ENTPMenu.className = '';
        ESFJMenu.className = '';
        ESFPMenu.className = 'menu_selected';
        ESTJMenu.className = '';
        ESTPMenu.className = '';
        INFJMenu.className = '';
        INFPMenu.className = '';
        INTJMenu.className = '';
        INTPMenu.className = '';
        ISFJMenu.className = '';
        ISFPMenu.className = '';
        ISTJMenu.className = '';
        ISTPMenu.className = '';
        setENFJMarkers(null);
        setENFPMarkers(null);
        setENTJMarkers(null);
        setENTPMarkers(null);
        setESFJMarkers(null);
        setESFPMarkers(map);
        setESTJMarkers(null);
        setESTPMarkers(null);
        setINFJMarkers(null);
        setINFPMarkers(null);
        setINTJMarkers(null);
        setINTPMarkers(null);
        setISFJMarkers(null);
        setISFPMarkers(null);
        setISTJMarkers(null);
        setISTPMarkers(null);
        mouseOverPlace('ESFP')
    }
    else if (type === 'estj') {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div

        mapOption = {
            center: new kakao.maps.LatLng(37.598004414546934, 126.97770621963765), // 지도의 중심좌표
            level: 8 // 지도의 확대 레벨
        };
        // 기존 맵 초기화 및 새 맵 생성
        map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        ENFJMenu.className = '';
        ENFPMenu.className = '';
        ENTJMenu.className = '';
        ENTPMenu.className = '';
        ESFJMenu.className = '';
        ESFPMenu.className = '';
        ESTJMenu.className = 'menu_selected';
        ESTPMenu.className = '';
        INFJMenu.className = '';
        INFPMenu.className = '';
        INTJMenu.className = '';
        INTPMenu.className = '';
        ISFJMenu.className = '';
        ISFPMenu.className = '';
        ISTJMenu.className = '';
        ISTPMenu.className = '';
        setENFJMarkers(null);
        setENFPMarkers(null);
        setENTJMarkers(null);
        setENTPMarkers(null);
        setESFJMarkers(null);
        setESFPMarkers(null);
        setESTJMarkers(map);
        setESTPMarkers(null);
        setINFJMarkers(null);
        setINFPMarkers(null);
        setINTJMarkers(null);
        setINTPMarkers(null);
        setISFJMarkers(null);
        setISFPMarkers(null);
        setISTJMarkers(null);
        setISTPMarkers(null);
        mouseOverPlace('ESTJ')
    }
    else if (type === 'estp') {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div

            mapOption = {
                center: new kakao.maps.LatLng(37.598004414546934, 126.97770621963765), // 지도의 중심좌표
                level: 8 // 지도의 확대 레벨
            };
        // 기존 맵 초기화 및 새 맵 생성
        map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        ENFJMenu.className = '';
        ENFPMenu.className = '';
        ENTJMenu.className = '';
        ENTPMenu.className = '';
        ESFJMenu.className = '';
        ESFPMenu.className = '';
        ESTJMenu.className = '';
        ESTPMenu.className = 'menu_selected';
        INFJMenu.className = '';
        INFPMenu.className = '';
        INTJMenu.className = '';
        INTPMenu.className = '';
        ISFJMenu.className = '';
        ISFPMenu.className = '';
        ISTJMenu.className = '';
        ISTPMenu.className = '';
        setENFJMarkers(null);
        setENFPMarkers(null);
        setENTJMarkers(null);
        setENTPMarkers(null);
        setESFJMarkers(null);
        setESFPMarkers(null);
        setESTJMarkers(null);
        setESTPMarkers(map);
        setINFJMarkers(null);
        setINFPMarkers(null);
        setINTJMarkers(null);
        setINTPMarkers(null);
        setISFJMarkers(null);
        setISFPMarkers(null);
        setISTJMarkers(null);
        setISTPMarkers(null);
        mouseOverPlace('ESTP')
    }
    else if (type === 'infj') {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div

            mapOption = {
                center: new kakao.maps.LatLng(37.598004414546934, 126.97770621963765), // 지도의 중심좌표
                level: 8 // 지도의 확대 레벨
            };
        // 기존 맵 초기화 및 새 맵 생성
        map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        ENFJMenu.className = '';
        ENFPMenu.className = '';
        ENTJMenu.className = '';
        ENTPMenu.className = '';
        ESFJMenu.className = '';
        ESFPMenu.className = '';
        ESTJMenu.className = '';
        ESTPMenu.className = '';
        INFJMenu.className = 'menu_selected';
        INFPMenu.className = '';
        INTJMenu.className = '';
        INTPMenu.className = '';
        ISFJMenu.className = '';
        ISFPMenu.className = '';
        ISTJMenu.className = '';
        ISTPMenu.className = '';
        setENFJMarkers(null);
        setENFPMarkers(null);
        setENTJMarkers(null);
        setENTPMarkers(null);
        setESFJMarkers(null);
        setESFPMarkers(null);
        setESTJMarkers(null);
        setESTPMarkers(null);
        setINFJMarkers(map);
        setINFPMarkers(null);
        setINTJMarkers(null);
        setINTPMarkers(null);
        setISFJMarkers(null);
        setISFPMarkers(null);
        setISTJMarkers(null);
        setISTPMarkers(null);
        mouseOverPlace('INFJ')
    }
    else if (type === 'infp') {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div

            mapOption = {
                center: new kakao.maps.LatLng(37.598004414546934, 126.97770621963765), // 지도의 중심좌표
                level: 8 // 지도의 확대 레벨
            };
        // 기존 맵 초기화 및 새 맵 생성
        map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        ENFJMenu.className = '';
        ENFPMenu.className = '';
        ENTJMenu.className = '';
        ENTPMenu.className = '';
        ESFJMenu.className = '';
        ESFPMenu.className = '';
        ESTJMenu.className = '';
        ESTPMenu.className = '';
        INFJMenu.className = '';
        INFPMenu.className = 'menu_selected';
        INTJMenu.className = '';
        INTPMenu.className = '';
        ISFJMenu.className = '';
        ISFPMenu.className = '';
        ISTJMenu.className = '';
        ISTPMenu.className = '';
        setENFJMarkers(null);
        setENFPMarkers(null);
        setENTJMarkers(null);
        setENTPMarkers(null);
        setESFJMarkers(null);
        setESFPMarkers(null);
        setESTJMarkers(null);
        setESTPMarkers(null);
        setINFJMarkers(null);
        setINFPMarkers(map);
        setINTJMarkers(null);
        setINTPMarkers(null);
        setISFJMarkers(null);
        setISFPMarkers(null);
        setISTJMarkers(null);
        setISTPMarkers(null);
        mouseOverPlace('INFP')
    }
    else if (type === 'intj') {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div

            mapOption = {
                center: new kakao.maps.LatLng(37.598004414546934, 126.97770621963765), // 지도의 중심좌표
                level: 8 // 지도의 확대 레벨
            };
        // 기존 맵 초기화 및 새 맵 생성
        map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        ENFJMenu.className = '';
        ENFPMenu.className = '';
        ENTJMenu.className = '';
        ENTPMenu.className = '';
        ESFJMenu.className = '';
        ESFPMenu.className = '';
        ESTJMenu.className = '';
        ESTPMenu.className = '';
        INFJMenu.className = '';
        INFPMenu.className = '';
        INTJMenu.className = 'menu_selected';
        INTPMenu.className = '';
        ISFJMenu.className = '';
        ISFPMenu.className = '';
        ISTJMenu.className = '';
        ISTPMenu.className = '';
        setENFJMarkers(null);
        setENFPMarkers(null);
        setENTJMarkers(null);
        setENTPMarkers(null);
        setESFJMarkers(null);
        setESFPMarkers(null);
        setESTJMarkers(null);
        setESTPMarkers(null);
        setINFJMarkers(null);
        setINFPMarkers(null);
        setINTJMarkers(map);
        setINTPMarkers(null);
        setISFJMarkers(null);
        setISFPMarkers(null);
        setISTJMarkers(null);
        setISTPMarkers(null);
        mouseOverPlace('INTJ')

    }
    else if (type === 'intp') {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div

            mapOption = {
                center: new kakao.maps.LatLng(37.598004414546934, 126.97770621963765), // 지도의 중심좌표
                level: 8 // 지도의 확대 레벨
            };
        // 기존 맵 초기화 및 새 맵 생성
        map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        ENFJMenu.className = '';
        ENFPMenu.className = '';
        ENTJMenu.className = '';
        ENTPMenu.className = '';
        ESFJMenu.className = '';
        ESFPMenu.className = '';
        ESTJMenu.className = '';
        ESTPMenu.className = '';
        INFJMenu.className = '';
        INFPMenu.className = '';
        INTJMenu.className = '';
        INTPMenu.className = 'menu_selected';
        ISFJMenu.className = '';
        ISFPMenu.className = '';
        ISTJMenu.className = '';
        ISTPMenu.className = '';
        setENFJMarkers(null);
        setENFPMarkers(null);
        setENTJMarkers(null);
        setENTPMarkers(null);
        setESFJMarkers(null);
        setESFPMarkers(null);
        setESTJMarkers(null);
        setESTPMarkers(null);
        setINFJMarkers(null);
        setINFPMarkers(null);
        setINTJMarkers(null);
        setINTPMarkers(map);
        setISFJMarkers(null);
        setISFPMarkers(null);
        setISTJMarkers(null);
        setISTPMarkers(null);
        mouseOverPlace('INTP')
        
    }
    else if (type === 'isfj') {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div

            mapOption = {
                center: new kakao.maps.LatLng(37.598004414546934, 126.97770621963765), // 지도의 중심좌표
                level: 8 // 지도의 확대 레벨
            };
        // 기존 맵 초기화 및 새 맵 생성
        map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        ENFJMenu.className = '';
        ENFPMenu.className = '';
        ENTJMenu.className = '';
        ENTPMenu.className = '';
        ESFJMenu.className = '';
        ESFPMenu.className = '';
        ESTJMenu.className = '';
        ESTPMenu.className = '';
        INFJMenu.className = '';
        INFPMenu.className = '';
        INTJMenu.className = '';
        INTPMenu.className = '';
        ISFJMenu.className = 'menu_selected';
        ISFPMenu.className = '';
        ISTJMenu.className = '';
        ISTPMenu.className = '';
        setENFJMarkers(null);
        setENFPMarkers(null);
        setENTJMarkers(null);
        setENTPMarkers(null);
        setESFJMarkers(null);
        setESFPMarkers(null);
        setESTJMarkers(null);
        setESTPMarkers(null);
        setINFJMarkers(null);
        setINFPMarkers(null);
        setINTJMarkers(null);
        setINTPMarkers(null);
        setISFJMarkers(map);
        setISFPMarkers(null);
        setISTJMarkers(null);
        setISTPMarkers(null);
        mouseOverPlace('ISFJ')
    }
    else if (type === 'isfp') {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div

            mapOption = {
                center: new kakao.maps.LatLng(37.598004414546934, 126.97770621963765), // 지도의 중심좌표
                level: 8 // 지도의 확대 레벨
            };
        // 기존 맵 초기화 및 새 맵 생성
        map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        removeMBTIMarkers(before)
        ENFJMenu.className = '';
        ENFPMenu.className = '';
        ENTJMenu.className = '';
        ENTPMenu.className = '';
        ESFJMenu.className = '';
        ESFPMenu.className = '';
        ESTJMenu.className = '';
        ESTPMenu.className = '';
        INFJMenu.className = '';
        INFPMenu.className = '';
        INTJMenu.className = '';
        INTPMenu.className = '';
        ISFJMenu.className = '';
        ISFPMenu.className = 'menu_selected';
        ISTJMenu.className = '';
        ISTPMenu.className = '';
        setENFJMarkers(null);
        setENFPMarkers(null);
        setENTJMarkers(null);
        setENTPMarkers(null);
        setESFJMarkers(null);
        setESFPMarkers(null);
        setESTJMarkers(null);
        setESTPMarkers(null);
        setINFJMarkers(null);
        setINFPMarkers(null);
        setINTJMarkers(null);
        setINTPMarkers(null);
        setISFJMarkers(null);
        setISFPMarkers(map);
        setISTJMarkers(null);
        setISTPMarkers(null);
        mouseOverPlace('ISFP')
    }
    else if (type === 'istj') {
        
        console.log(before)
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div

            mapOption = {
                center: new kakao.maps.LatLng(37.598004414546934, 126.97770621963765), // 지도의 중심좌표
                level: 8 // 지도의 확대 레벨
            };
        // 기존 맵 초기화 및 새 맵 생성
        map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        // removeMBTIMarkers(before)
        ENFJMenu.className = '';
        ENFPMenu.className = '';
        ENTJMenu.className = '';
        ENTPMenu.className = '';
        ESFJMenu.className = '';
        ESFPMenu.className = '';
        ESTJMenu.className = '';
        ESTPMenu.className = '';
        INFJMenu.className = '';
        INFPMenu.className = '';
        INTJMenu.className = '';
        INTPMenu.className = '';
        ISFJMenu.className = '';
        ISFPMenu.className = '';
        ISTJMenu.className = 'menu_selected';
        ISTPMenu.className = '';
        setENFJMarkers(null);
        setENFPMarkers(null);
        setENTJMarkers(null);
        setENTPMarkers(null);
        setESFJMarkers(null);
        setESFPMarkers(null);
        setESTJMarkers(null);
        setESTPMarkers(null);
        setINFJMarkers(null);
        setINFPMarkers(null);
        setINTJMarkers(null);
        setINTPMarkers(null);
        setISFJMarkers(null);
        setISFPMarkers(null);
        // mouseOverPlace('ISTJ')
        setISTJMarkers(map);
        mouseOverPlace('ISTJ')
        setISTPMarkers(null);
        before = 'ISTJ'
        // 새 맵을 만들기
        
        
    }
    else if (type === 'istp') {
        // mouseOverPlace(null)
        // removeMBTIMarkers(before)
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div

            mapOption = {
                center: new kakao.maps.LatLng(37.598004414546934, 126.97770621963765), // 지도의 중심좌표
                level: 8 // 지도의 확대 레벨
            };
        // 기존 맵 초기화 및 새 맵 생성
        map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        ENFJMenu.className = '';
        ENFPMenu.className = '';
        ENTJMenu.className = '';
        ENTPMenu.className = '';
        ESFJMenu.className = '';
        ESFPMenu.className = '';
        ESTJMenu.className = '';
        ESTPMenu.className = '';
        INFJMenu.className = '';
        INFPMenu.className = '';
        INTJMenu.className = '';
        INTPMenu.className = '';
        ISFJMenu.className = '';
        ISFPMenu.className = '';
        ISTJMenu.className = '';
        ISTPMenu.className = 'menu_selected';
        setENFJMarkers(null);
        setENFPMarkers(null);
        setENTJMarkers(null);
        setENTPMarkers(null);
        setESFJMarkers(null);
        setESFPMarkers(null);
        setESTJMarkers(null);
        setESTPMarkers(null);
        setINFJMarkers(null);
        setINFPMarkers(null);
        setINTJMarkers(null);
        setINTPMarkers(null);
        setISFJMarkers(null);
        setISFPMarkers(null);
        setISTJMarkers(null);
        // setISTPMarkers(map);
        setISTPMarkers(null);
        mouseOverPlace('ISTP')
        var before = 'ISTP'
        console.log(before)
    }
}

