const contoh = `*أسماء الله الحسنى*
`
// data here
const anjuran = `
وعن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: «عندي تسعة وتسعون اسما، مائة إلا واحدا، من حفظها دخل الجنة، وهو موتر يحب الوتر».
يعني: "بل إن لي تسعة وتسعين اسما، يقال لها مائة إلا واحدا، من أحصاها دخل الجنة، وهو وتر يحب الوتر".`
let handler = async (m, { args, usedPrefix, command }) => {
    let json = JSON.parse(JSON.stringify(global.asmaulhusna))
    let data = json.map((v, i) => `${i + 1}. ${v.latin}\n${v.arabic}\n${v.translation_id}`).join('\n\n')
    if (isNaN(args[0])) throw `مثال:\n${usedPrefix + command} 1`
    if (args[0]) {
        if (args[0] < 1 || args[0] > 99) throw `الحد الأدنى 1 والحد الأقصى 99!`
        let { index, latin, arabic, translation_id, translation_en } = json.find(v => v.index == args[0].replace(/[^0-9]/g, ''))
        return m.reply(`🔢 *رقم:* ${index}
${arabic}

${latin}

${translation_id}

${translation_en}
`.trim())
    }
    m.reply(contoh + data + anjuran)
}
handler.help = ['3brat [escribe un número 1 - 99]']
handler.tags = ['3brat']
handler.command = /^(عبارات(s)?)$/i
export default handler

global.asmaulhusna = [
    {
        index: 1,
    latin: "💐 *الكاتب:* *جون ماكسويل*",
    arabic: "💐 *العبارة:* _في الحياة، أحيانًا نفوز وأحيانًا نتعلم._",
    translation_id: "💐 *الرأي:* يجب أن نتعلم من تلك اللحظات الغير مريحة لنستمر في النمو كأفراد. ببساطة، لا يهم كيف تسقط، ولكن كيف تنهض.",
    translation_en: "بمعنى آخر، لا يهم كيف تسقط، ولكن كيف تنهض."
    },
    {
        index: 2,
    latin: "💐 *الكاتب:* *باولو كويلو*",
    arabic: "💐 *العبارة:* _لا تقيس ثروتك بالمال الذي تملكه، بل قيسها بتلك الأشياء التي تمتلكها ولا ترغب في تبديلها بالمال._",
    translation_id: "💐 *الرأي:* في مجتمع مادي، من السهل قياس الذات بناءً على الممتلكات التي نمتلكها، وهذا النوع من التقييمات يكون سلبيًا للغاية بالنسبة لتقدير الذات.",
    translation_en: "علاوة على ذلك، ما سيجعلك سعيدًا حقًا في الحياة اليومية هي تلك الأشياء الصغيرة واللحظات الجميلة."
    },
    {
        index: 3,
    latin: "💐 *الكاتب:* *مجهول*",
    arabic: "💐 *العبارة:* _طلب العفو هو من الأذكياء، العفو هو من النبلاء، والعفو عن النفس هو من الحكماء._",
    translation_id: "💐 *الرأي:* العفو هو واحد من أفضل أشكال العلاج العاطفي. إذا طلبت العفو وإذا عفوت، فإن ذلك يظهر عظمتك كفرد. ولكنك ستكون أكبر وأفضل عاطفيًا إذا قمت أيضًا بالعفو عن نفسك. شيء يبدو سهلاً في النظرية ولكن يصبح معقدًا في الممارسة.",
    translation_en: "إذا كنت تتعرض لهذه العبارة لأنه يصعب عليك أن تعفو عن نفسك، فإن التأمل قد يكون مفيدًا لك. هناك أيضًا فلسفة هاواية تسمى Ho'oponopono تعتمد فعاليتها على العفو الروحي."
    },
    {
        index: 4,
    latin: "💐 *الكاتب:* *مجهول*",
    arabic: "💐 *العبارة:* _إذا أردت شيئًا لم تحصل عليه أبدًا، عليك أن تفعل شيئًا لم تفعله أبدًا._",
    translation_id: "💐 *الرأي:* إذا كنت تفعل دائمًا نفس الشيء، فمن المحتمل أن تحصل دائمًا على نفس النتائج.",
    translation_en: "إذا كنت تريد أن تخوض تجارب جديدة، أو تلتقي بأشخاص مثيرين، أو تنمو في العمل، فمن الأفضل أن تبدأ في التفكير في أنشطة جديدة والقيام بأشياء لا تفعلها عادةً."
    },
    {
        index: 5,
    latin: "💐 *الكاتب:* *مثل تركي*",
    arabic: "💐 *العبارة:* _من يبحث عن صديق بلا عيوب يبقى بدون أصدقاء._",
    translation_id: "💐 *الرأي:* الهدف من هذه العبارة هو جعلنا ندرك أن لدينا جميعًا عيوبًا ونرتكب أخطاءًا كثيرة، لا يوجد إنسان مثالي في هذا العالم.",
    translation_en: "أن تكون شخصًا مثاليًا جدًا يؤدي إلى عواقب سلبية على النفس."
    },
    {
    index: 6,
    latin: "💐 *الكاتب:* *مثل اسكتلندي*",
    arabic: "💐 *العبارة:* _الابتسامة تكلف أقل من تكلفة الكهرباء وتعطي أكثر من الضوء._",
    translation_id: "💐 *الرأي:* هذه العبارة هي واحدة من تلك العبارات الملهمة، ولكنها أيضًا عبارة حكيمة. الابتسامة تساعد في الحفاظ على المزاج الجيد، وتجمل الوجه، وتثير الأفكار الإيجابية.",
    translation_en: "ليس من المثير للدهشة أن يكون من الأسهل طلب شيء من شخص ما بابتسامة، فالابتسامة لا تنتج تأثيرًا إيجابيًا فقط علينا أنفسنا، بل أيضًا على الشخص الآخر."
},
{
    index: 7,
    latin: "💐 *الكاتب:* *هنري فورد*",
    arabic: "💐 *العبارة:* _لا تبحث عن العيب، بل ابحث عن العلاج._",
    translation_id: "💐 *الرأي:* تذكرني هذه العبارة بصديق جيد كان يقول لي دائمًا: 'إذا لم تكن جزءًا من الحل، فأنت تصبح جزءًا من المشكلة.",
    translation_en: "تشير كلتا العبارتين إلى أنه لا ينبغي لنا البحث عن أصل المشكلة فقط، حيث أن ذلك ضروري، ولكن بدلاً من البقاء نعيسًا على الفشل إلى الأبد، يجب علينا حل ما حدث بشكل سريع."
},
{
    index: 8,
    latin: "💐 *الكاتب:* *ويليام جورج وارد*",
    arabic: "💐 *العبارة:* _التشاؤمي يشكو من الرياح؛ المتفائل يأمل في تغييرها؛ الواقعي يضبط الأشرعة._",
    translation_id: "💐 *الرأي:* كونك تشاؤميًا جدًا أو متفائلًا جدًا يمكن أن يؤدي إلى عواقب سلبية للغاية.",
    translation_en: "التشاؤمي سيرى كل شيء بشكل سيء ولن يكون هناك شيء ليغير هذا السوء. المتفائل سيروج لرؤية كل شيء بشكل جيد وسيشوه الواقع ليتناسب مع أفكاره. على العكس من ذلك، يحاول الشخص الواقعي حل المشاكل على الرغم من أنه يعلم أنها معقدة في كثير من الأحيان. يعني ذلك أنه يحافظ على قدميه على الأرض ويتصرف بشكل حكيم."
},
{
    index: 9,
    latin: "💐 *الكاتب:* *أم تيريزا من كلكتا*",
    arabic: "💐 *العبارة:* _أحيانًا نشعر أن ما نقوم به ليس سوى قطرة في البحر، ولكن البحر سيكون أقل إذا فاتته قطرة._",
    translation_id: "💐 *الرأي:* يعني ذلك أنه على الرغم من أننا قد نشعر أن ما نقوم به لا يخدم لشيء، إلا أن كل شيء نقوم به له نتيجة.",
    translation_en: "أحيانًا لا يمكننا رؤية هذه النتيجة على الفور، أو في بعض الأحيان تكون مجرد خطوة إضافية في الطريق الذي نسلكه. إنها تتعلق ببناء شيء وفي النهاية ستأتي الثمار."
},
    {
    index: 10,
    latin: "💐 *الكاتب:* *بوذا*",
    arabic: "💐 *العبارة:* _التأمل هو الطريق إلى الخلود؛ نقص التأمل، هو الطريق إلى الموت._",
    translation_id: "💐 *الرأي:* هذه العبارة المأخوذة من الفلسفة البوذية تشير إلى أهمية التأمل في التنمية الشخصية وفي التعلم من خلال الحياة.",
    translation_en: "لقد تعلمنا جميعًا من الأخطاء، ولكن كل شخص يعيش التجارب بطريقة فريدة. لكي نتمكن من الاحتفاظ بهذه التجارب، يتطلب ذلك عملية تفكير نشطة حول ما نعيشه، لكي نستجوب معنى هذه التجارب بالنسبة لنا."
},
{
    index: 11,
    latin: "💐 *الكاتب:* *فرانسيس بيكون*",
    arabic: "💐 *العبارة:* _يجب أن نخلق الفرصة، لا ننتظر حتى تأتي إلينا._",
    translation_id: "💐 *الرأي:* تشير هذه العبارة إلى أنه يجب البحث عن الفرص، فهي لن تأتي تلقائيًا.",
    translation_en: "بمعنى آخر، إذا أردنا شيئًا، يجب أن نناضل من أجله. إنها عكس لحالة التحليل الزائد."
},
{
    index: 12,
    latin: "💐 *الكاتب:* *نابليون*",
    arabic: "💐 *العبارة:* _الحكماء هم الذين يسعون للحكمة؛ الأغبياء يعتقدون أنهم وجدوها._",
    translation_id: "💐 *الرأي:* تشير هذه العبارة إلى أنه يجب البحث عن الفرص، فهي لن تأتي تلقائيًا.",
    translation_en: "بمعنى آخر، إذا أردنا شيئًا، يجب أن نناضل من أجله. إنها عكس لحالة التحليل الزائد."
},
{
    index: 13,
    latin: "💐 *الكاتب:* *سينيكا*",
    arabic: "💐 *العبارة:* _ليس الفقير الذي يمتلك قليلاً، بل الذي يرغب في الكثير._",
    translation_id: "💐 *الرأي:* تشير هذه العبارة إلى أن الأشخاص الذين يرغبون في أقل قدر من الممتلكات المادية هم الذين سيكونون بالتأكيد أكثر سعادة في الحياة.",
    translation_en: "الامتلاك الكبير لا يعني السعادة، فإذا كنت راضيًا بقليل، فلن تحتاج إلى الكثير من الثروة."
},
{
    index: 14,
    latin: "💐 *الكاتب:* *ويليام شكسبير*",
    arabic: "💐 *العبارة:* _إذا لم تتذكر أخف جنون أدمنك الحب عليه، فلم تحب._",
    translation_id: "💐 *الرأي:* تذكير من هذه العبارة من مؤلف روميو وجولييت بأن الغرام هو واحدة من الإحساسات الأكثر روعة التي يمكن للإنسان الاستمتاع بها.",
    translation_en: "الحب مثل مخدر يمكن أن يجعلك تشعر بالارتفاع ويمكن أن يجعلك ترتكب حماقات لا تصدق."
},
    {
    index: 15,
    latin: "💐 *الكاتب:* *مجهول*",
    arabic: "💐 *العبارة:* _عندما يشير الحكيم إلى القمر، يركز الأحمق على الإصبع._",
    translation_id: "💐 *الرأي:* الأغبياء لا يرغبون في رؤية أكثر مما يمكن أعينهم رؤيته.",
    translation_en: "بينما يوسع الحكماء عقولهم، وهم مبدعون ويتأملون. في حين أن الحكيم هو مستكشف، الأحمق هو مستسلم."
},
{
    index: 16,
    latin: "💐 *الكاتب:* *رالف والدو إيمرسون*",
    arabic: "💐 *العبارة:* _الصديق هو الشخص الذي يمكنك التفكير بصوت عالٍ معه._",
    translation_id: "💐 *الرأي:* الصديق الحقيقي هو الشخص الذي لن يخذلك والذي يمكنك الوثوق به بأسرارك الكبيرة.",
    translation_en: "تحدد هذه العبارة معنى الصداقة وتبرز أهمية الثقة الكاملة في شخص ما. بلا شك، من لديه صديق لديه كنز ويجب أن نقدر هذه الارتباط مع الآخرين."
},
{
    index: 17,
    latin: "💐 *الكاتب:* *بوذا*",
    arabic: "💐 *العبارة:* _الألم لا يمكن تجنبه ولكن المعاناة اختيارية._",
    translation_id: "💐 *الرأي:* يمكن للجميع أن يعيش تجارب قد تجعلنا نعاني ونمر بأوقات صعبة، وهذا له عملية لتجاوزه لأنه جزء من الحياة.",
    translation_en: "لكن لدينا القدرة على القيام بأشياء لعدم البقاء عالقين في المعاناة. لذلك، القرار هو لدينا لتجاوز التجارب السيئة في أقرب وقت ممكن."
},
{
    index: 18,
    latin: "💐 *الكاتب:* *ديفيد أبرناثي*",
    arabic: "💐 *العبارة:* _يمكن قتل الحالم، ولكن لا يمكن قتل الحلم._",
    translation_id: "💐 *الرأي:* عبارة تشرح لنا أن اللحم هو محدود، ولكن ليس الأفكار.",
    translation_en: "حتى الملموس له نهاية."
},
    {
    index: 19,
    latin: "💐 *الكاتب:* *بنجامين فرانكلين*",
    arabic: "💐 *العبارة:* _من لديه الصبر، سيحصل على ما يريد._",
    translation_id: "💐 *الرأي:* أحد أوائل رؤساء الولايات المتحدة يطلعنا على الفضيلة الكبيرة التي هي الصبر.",
    translation_en: "تلك الفضيلة التي ليست لديها الجميع."
},
{
    index: 20,
    latin: "💐 *الكاتب:* *بيثاغورس*",
    arabic: "💐 *العبارة:* _قوموا بتربية الأطفال، ولن يكون من الضروري معاقبة الرجال._",
    translation_id: "💐 *الرأي:* بيثاغورس اليوناني عن أهمية التعليم في المجتمع.",
    translation_en: "فعل الشر لشخص في مرحلته الكاملة من النمو ليس جيدًا."
},
{
    index: 21,
    latin: "💐 *الكاتب:* *كونفوشيوس*",
    arabic: "💐 *العبارة:* _التعلم بدون تأمل هو إضاعة للطاقة._",
    translation_id: "💐 *الرأي:* الفيلسوف الصيني الحكيم كونفوشيوس، عن ضرورة تبني نمط تعلم يعتمد على التأمل.",
    translation_en: "المعرفة لا تستنفد الوقت."
},
{
    index: 22,
    latin: "💐 *الكاتب:* *ماكيافيلي*",
    arabic: "💐 *العبارة:* _الأشخاص يهينون الذين يحبونهم قبل أولئك الذين يخافون منهم._",
    translation_id: "💐 *الرأي:* الأشخاص العنيدين قد يسببون لنا بعض الخوف، ولذا يجب علينا أن نتعامل معهم بحذر.",
    translation_en: "كن حذرًا من هذا النوع من الأشخاص."
},
    {
    index: 23,
    latin: "💐 *الكاتب:* *فرانسيس بيكون*",
    arabic: "💐 *العبارة:* _الصداقة تضاعف الفرح وتقسم الأحزان إلى نصف._",
    translation_id: "💐 *الرأي:* حقيقة لا يمكن إنكارها؛ الحياة أقل قساوة عندما نقضيها بالقرب من الأشخاص الذين يحبوننا بشكل حقيقي.",
    translation_en: "الصداقة قد تكون جيدة اعتمادًا على الأشخاص."
},
{
    index: 24,
    latin: "💐 *الكاتب:* *فريدريش نيتشه*",
    arabic: "💐 *العبارة:* _إنما للذي يبني المستقبل الحق في الحكم على الماضي._",
    translation_id: "💐 *الرأي:* ترك نيتشه لنا العديد من الاقتباسات الشهيرة، مثل هذه على سبيل المثال، التي تشير إلى أهمية السيطرة على حياتنا.",
    translation_en: "تذكر أن تشرب الماء. 👀"
},
{
    index: 25,
    latin: "💐 *الكاتب:* *يوهان كاسبار لافاتير*",
    arabic: "💐 *العبارة:* _إذا كنت تريد أن تكون حكيمًا، تعلم كيف تسأل بعقلانية، وكيف تستمع بانتباه، وكيف ترد بسكينة، وكيف تصمت عندما ليس لديك شيء لتقوله._",
    translation_id: "💐 *الرأي:* نصائح عملية لتحقيق ذروات الذكاء والحكمة.",
    translation_en: "نصائح تنقذ الأرواح."
},
{
    index: 26,
    latin: "💐 *الكاتب:* *خورخي لويس بورخس*",
    arabic: "💐 *العبارة:* _لقد ارتكبت أسوأ خطيئة يمكن للإنسان أن يرتكبها. لم أكن سعيدًا._",
    translation_id: "💐 *الرأي:* تركنا بورخس بهذا التأمل، الذي يظهر أنه لم يكن كفءًا في الاستمتاع بالحياة.",
    translation_en: "عيشها، ربما تكون الأخيرة."
},
    {
    index: 27,
    latin: "💐 *الكاتب:* *أفلاطون*",
    arabic: "💐 *العبارة:* _الحرية تكمن في أن نكون أسياد حياتنا الخاصة._",
    translation_id: "💐 *الرأي:* الحرية هي أحد المفاهيم التي درسها الفلاسفة على نطاق واسع.",
    translation_en: "هنا، يشرح لنا أفلاطون ما هي المفتاح لتحقيق الحرية."
},
{
    index: 28,
    latin: "💐 *الكاتب:* *رينيه ديكارت*",
    arabic: "💐 *العبارة:* _سأعطي كل ما أعرفه مقابل نصف ما أجهله._",
    translation_id: "💐 *الرأي:* كان الفرنسي رينيه ديكارت على دراية تامة أيضًا بأنه، على الرغم من أنه كان أحد ألذهن المفكرين الحديثين، إلا أنه كان يجهل الكثير أكثر مما كان يعرفه.",
    translation_en: "تجاهل الأمور، ليس جيدًا."
},
{
    index: 29,
    latin: "💐 *الكاتب:* *بالتاسار غراسيان*",
    arabic: "💐 *العبارة:* _العلم وتظهيره هو أن يكون ذلك ذو قيمة مضاعفة._",
    translation_id: "💐 *الرأي:* إحدى الفروق بين المعرفة السطحية والمعرفة العميقة، حسب رأي بالتاسار غراسيان.",
    translation_en: "وضع في تطبيق ما تعلمه."
},
{
    index: 30,
    latin: "💐 *الكاتب:* *لاو تسي*",
    arabic: "💐 *العبارة:* _أن نعلم أننا لا نعلم، هذا هو التواضع. التفكير في أننا نعلم ما لا نعلم، هذا هو المرض._",
    translation_id: "💐 *الرأي:* يعمق لاو تسي في مسألة الجهل وتصور الحكمة، في نطاق من الفلاسفة الذين قالوا عبارات مماثلة.",
    translation_en: "عدم الجهل."
},
    {
    index: 31,
    latin: "💐 *الكاتب:* *إبيكتيتو دي فريجيا*",
    arabic: "💐 *العبارة:* _الشخص الحكيم لا يجب أن يمتنع عن المشاركة في إدارة الدولة، فإنه من الجريمة التنازل عن أن نكون مفيدين للمحتاجين ومن الجبن السماح للأشخاص غير اللائقين بالسيطرة._",
    translation_id: "💐 *الرأي:* تأمل سياسي؛ يجب على المواطنين الحكماء محاولة المشاركة في إدارة البوليس للمساهمة برشاشهم في إدارة عادلة يجب أن تكون عادلة مع الجميع.",
    translation_en: "تذكر أن تحتفظ بالوقت لكل شيء."
},
{
    index: 32,
    latin: "💐 *الكاتب:* *كونفوشيوس*",
    arabic: "💐 *العبارة:* _الحياة بسيطة جدًا، ولكننا نصر على تعقيدها._",
    translation_id: "💐 *الرأي:* كان الفيلسوف كونفوشيوس يعتقد أن الحياة تسير وفقًا لمبادئ بسيطة يجب أن نعتمدها كقواعد لحياتنا اليومية.",
    translation_en: "إنها بسيطة جدًا..."
},
{
    index: 33,
    latin: "💐 *الكاتب:* *إبراهيم لينكولن*",
    arabic: "💐 *العبارة:* _في النهاية، ليست السنوات في حياتنا هي التي تهم، بل الحياة في سنواتنا._",
    translation_id: "💐 *الرأي:* لينكولن، حول معيار الجودة الذي يجب علينا تطبيقه عند تقييم حياتنا.",
    translation_en: "الجميع يتجاهلون حقيقة أن كلما اقتربت الموت مع مرور الوقت ، ولكن إذا عشت بشكل كامل ، فسيكون ذلك قد تستحق العناء."
},
{
    index: 34,
    latin: "💐 *الكاتب:* *فولتير*",
    arabic: "💐 *العبارة:* _كل شخص هو مخلوق من الزمن الذي يعيش فيه._",
    translation_id: "💐 *الرأي:* كان فولتير يعتقد أننا لا يمكننا اعتبار أنفسنا ككائنات مستقلة عن السياق التاريخي الذي نعيش فيه.",
    translation_en: "أفكارنا ونمط حياتنا دائماً ما يتم تشكيلها بواسطة تاريخ ولادتنا."
},
    {
    index: 35,
    latin: "💐 *الكاتب:* *أرسطو*",
    arabic: "💐 *العبارة:* _نحن نصبح ما نقوم به بشكل متكرر._",
    translation_id: "💐 *الرأي:* ابتعد أرسطو عن الأفكار المثلى التي كان يروِّجها أفلاطون؛ بالنسبة له ، كانت الحقائق والبيئة أكثر أهمية ، ويتضح ذلك في هذه العبارة من حياة فلسفية بارزة.",
    translation_en: "التكرار يجعلنا أفضل."
},
{
    index: 36,
    latin: "💐 *الكاتب:* *تشارلي تشابلن*",
    arabic: "💐 *العبارة:* _الحياة مأساة عندما تُرى من قرب ، ولكن في الإطار العام تتحول إلى كوميديا._",
    translation_id: "💐 *الرأي:* تشابلن ، كمخرج سينمائي ، كان يعلم أن حدثًا واحدًا ، أو حتى حياة شخص ، يتغير اعتمادًا على الطريقة التي يُقدم بها.",
    translation_en: "لحظات جيدة وسيئة."
},
{
    index: 37,
    latin: "💐 *الكاتب:* *ألبير كامي*",
    arabic: "💐 *العبارة:* _الإنسان هو الكائن الوحيد الذي يرفض أن يكون من هو._",
    translation_id: "💐 *الرأي:* ألبير كامي ، في إحدى عباراته الفلسفية حول الصراع الذي يخوضه الإنسان مع خلق معنى لوجوده.",
    translation_en: "تعلم كيف تقبل من تكون."
},
{
    index: 38,
    latin: "💐 *الكاتب:* *كاساندرا كلير*",
    arabic: "💐 *العبارة:* _كل معرفة تكون جارحة._",
    translation_id: "💐 *الرأي:* عبارة حكيمة تشير إلى الطريقة التي يقوم بها كل قطعة جديدة من المعرفة بتحطيم أسس ما كنا نعتقد أننا نعرفه.",
    translation_en: "دائمًا هناك شيء جديد لتعلمه."
},
    {
    index: 39,
    latin: "💐 *الكاتب:* *بابلو بيكاسو*",
    arabic: "💐 *العبارة:* _يستغرق الكثير من الوقت لتصبح شابًا._",
    translation_id: "💐 *الرأي:* يقوم الرسام الشهير بتغيير الترتيب الزمني الذي يتم فيه توضيب الشباب ليعبر عن أنها ، أكثر من كونها مرحلة بيولوجية ، شيء يُعلم.",
    translation_en: "تذكير: كن شخصًا جيدًا 😸"
},
{
    index: 40,
    latin: "💐 *الكاتب:* *هانا أرندت*",
    arabic: "💐 *العبارة:* _الوقت هو ما نرغب فيه أكثر وأيضًا ما نستخدمه بشكل أسوأ._",
    translation_id: "💐 *الرأي:* الفيلسوفة هانا أرندت ، عن المخاطر التي تنطوي عليها مجردة الفعل الفكري.",
    translation_en: "التفكير يجعلنا أكثر استقلالًا."
},
{
    index: 41,
    latin: "💐 *الكاتب:* *ويليام بين*",
    arabic: "💐 *العبارة:* _لا توجد أفكار خطيرة ؛ الفكر هو ، في حد ذاته ، شيء خطير._",
    translation_id: "💐 *الرأي:* تناقض قدمه الفيلسوف الإنجليزي وليام بين. لكي نكون على علم بأن الحياة هي لتستفيد منها إلى أقصى حد.",
    translation_en: "إذا كان من الممكن تغييره ، فمن المحتمل أن يكون ناتجًا عن تناقض الجد."
},
{
    index: 42,
    latin: "💐 *الكاتب:* *دافيد بن غوريون*",
    arabic: "💐 *العبارة:* _من لا يؤمن بالمعجزات ليس واقعيًا._",
    translation_id: "💐 *الرأي:* بخصوص الشذوذات والأحداث غير المفهومة المتضمنة في الواقع.",
    translation_en: "إذا لم تكن قد واجهت شذوذًا ما من قبل ، فربما تعتقد أنه غير موجود."
},
    {
    index: 43,
    latin: "💐 *الكاتب:* *فرانسيس بيكون*",
    arabic: "💐 *العبارة:* _الأمل هو وجبة إفطار جيدة، ولكن عشاء سيء._",
    translation_id: "💐 *الرأي:* الأمل شيء ذو حدين.",
    translation_en: "إيجابي عندما ينفتح علينا عالم كامل من الإمكانيات، ولكن ليس كذلك عندما يكون ذلك هو آخر مورد لدينا."
},
{
    index: 44,
    latin: "💐 *الكاتب:* *آلان بلوم*",
    arabic: "💐 *العبارة:* _التعليم هو حركة من الظلمة إلى النور._",
    translation_id: "💐 *الرأي:* صورة قوية لشرح ما هو التعليم.",
    translation_en: "الصورة التي يمكن أن تكون لديك الحقيقة حولك تعتمد على الطريقة التي تتخيلها بها."
},
{
    index: 45,
    latin: "💐 *الكاتب:* *إيريتش فروم*",
    arabic: "💐 *العبارة:* _الإبداع يتطلب أن تتخلى الشجاعة عن اليقين._",
    translation_id: "💐 *الرأي:* أبو علم النفس الإنساني، حول العلاقة بين الشجاعة وعدم اليقين.",
    translation_en: "أن تكون شجاعًا يجعلك مبدعًا/ة."
},
{
    index: 46,
    latin: "💐 *الكاتب:* *إدموند بيرك*",
    arabic: "💐 *العبارة:* _أولئك الذين لا يعرفون التاريخ محكومون بتكراره._",
    translation_id: "💐 *الرأي:* الفيلسوف المحافظ إدموند بيرك، حول ضرورة معرفة الماضي.",
    translation_en: "تعرف على الماضي، يوفر لك الوقت في المستقبل."
},
    {
    index: 47,
    latin: "💐 *الكاتب:* *سيسرو*",
    arabic: "💐 *العبارة:* _لا شيء مستحيل حتى تجعل خطابات الشخص مقبولة._",
    translation_id: "💐 *الرأي:* يتحدث سيسرو عن قوة الخطب المصممة بشكل جيد.",
    translation_en: "يمكن للخطاب أن يقنع الكثيرين."
},
{
    index: 48,
    latin: "💐 *الكاتب:* *دانتي*",
    arabic: "💐 *العبارة:* _يمكن لشرارة صغيرة أن تشعل لهبًا._",
    translation_id: "💐 *الرأي:* عبارة حكيمة تتضح من خلال صورة شعرية.",
    translation_en: "طرق غير متوقعة يمكن أن تظهر فيها ظواهر هامة ومعنوية."
},
{
    index: 49,
    latin: "💐 *الكاتب:* *دانتي*",
    arabic: "💐 *العبارة:* _القيادة لا تعتمد على أن تكون على صواب._",
    translation_id: "💐 *الرأي:* أحد أهم المفكرين حول التعليم يتحدث هنا عن كيفية تفسير شرعية القيادة.",
    translation_en: "تذكر، إذا قلت إنك تعرف كل شيء، أنت جاهل."
},
{
    index: 50,
    latin: "💐 *الكاتب:* *بي. إف. سكينر*",
    arabic: "💐 *العبارة:* _البيئة تشكل أفعال الفرد._",
    translation_id: "💐 *الرأي:* أهم مرجع في علم النفس السلوكي يتحدث عن نسبية الخط الفاصل بين الفرد والبيئة.",
    translation_en: "البيئة تحدد أفعالك."
},
    {
    index: 51,
    latin: "💐 *الكاتب:* *ستانيسلاف جيجي ليك*",
    arabic: "💐 *العبارة:* _الشباب هو هدية من الطبيعة، لكن العمر هو عمل فني._",
    translation_id: "💐 *الرأي:* وسيلة متفائلة لتقييم العمر ومرور الوقت نحو الشيخوخة.",
    translation_en: "العمر لا يحدد كيف ترى العالم."
},
{
    index: 52,
    latin: "💐 *الكاتب:* *ستانيسلاف جيجي ليك*",
    arabic: "💐 *العبارة:* _لا أحد يستطيع أن يؤذيني بدون إذني._",
    translation_id: "💐 *الرأي:* يشير الزعيم السلمي المؤثر في هذه العبارة الحكيمة إلى قوة الإرادة الشخصية.",
    translation_en: "التمتع بما تفعله يسمح لإرادتك بالبقاء قوية."
},
{
    index: 53,
    latin: "💐 *الكاتب:* *ديفيد كارادين*",
    arabic: "💐 *العبارة:* _إذا لم تستطع أن تكون شاعرًا، كن القصيدة._",
    translation_id: "💐 *الرأي:* وجهة نظر مختلفة لرؤية كيف يمكن أن تكون حياتنا فنية.",
    translation_en: "تعلم كيف تمتلك مهارات متعددة."
},
{
    index: 54,
    latin: "💐 *الكاتب:* *أوريبيدس*",
    arabic: "💐 *العبارة:* _لا شيء أقوى من الحاجة الماسة._",
    translation_id: "💐 *الرأي:* الشاعر اليوناني أوريبيدس يتحدث عن كيف يمكن أن يولد في نهاية المطاف قوة أفعالنا عندما تقل الحرية والقدرة على اتخاذ القرارات.",
    translation_en: "الحاجة قد تكون خطرة."
},
    {
    index: 55,
    latin: "💐 *الكاتب:* *القديس أوغسطينوس*",
    arabic: "💐 *العبارة:* _العجرفة ليست عظمة بل هي انتفاخ، وما هو منتفخ يبدو عظيمًا ولكنه ليس صحيحًا._",
    translation_id: "💐 *الرأي:* أحد المشاكل التي تعاني منها العجرفة هو أنها، وراء المظهر، تخفي شخصًا مجروحًا وغير آمن.",
    translation_en: "العدم الأمان يجعلك تظهر أقل من الآخرين."
},
{
    index: 56,
    latin: "💐 *الكاتب:* *ويليام شكسبير*",
    arabic: "💐 *العبارة:* _من الأفضل أن تكون ملكًا لصمتك من أن تكون عبدًا لكلماتك._",
    translation_id: "💐 *الرأي:* لا تقول أشياء قد تندم عليها في المستقبل.",
    translation_en: "عندما يحدث ذلك، فإنك تفكر بطريقة غير منطقية."
},
{
    index: 57,
    latin: "💐 *الكاتب:* *ويليام شكسبير*",
    arabic: "💐 *العبارة:* _الجمال هو القوة؛ والابتسامة هي سيفه._",
    translation_id: "💐 *الرأي:* تأمل في الجمال وسماته الرئيسية.",
    translation_en: "السمات التي يمكن أن تكون سلاحًا ذو حدين."
},
{
    index: 58,
    latin: "💐 *الكاتب:* *أوجدين ناش*",
    arabic: "💐 *العبارة:* _الكبر هو عندما تقابل الكثير من الناس حتى يذكرك كل شخص جديد بشخص آخر._",
    translation_id: "💐 *الرأي:* ثم لا شيء يفاجئك.",
    translation_en: "حكمة الكبر تتسبب في مشاكل معينة، مثل ما يصوره أوجدين ناش."
},
    {
  index: 59,
  latin: "💐 *المؤلف:* *سيفيرو أوشوا*",
  arabic: "💐 *العبارة:* _في المقام الأول ، تحتاج البحث إلى المزيد من العقول من الوسائل._",
  translation_id: "💐 *الرأي:* عبارة عن الحياة والعلم تظهر لنا أهمية الموهبة البشرية.",
  translation_en: "الموهبة البشرية، الجميع لديهم على الأقل واحدة.",
},
{
  index: 60,
  latin: "💐 *المؤلف:* *مكيافيلي*",
  arabic: "💐 *العبارة:* _من يُختار كأمير بتأييد الشعب يجب أن يحتفظ بالشعب كصديق._",
  translation_id: "💐 *الرأي:* تأمل سياسي وفقًا للمؤرخ الإيطالي الشهير.",
  translation_en: "عبارة قليلاً قرون وسطى.",
},
{
  index: 61,
  latin: "💐 *المؤلف:* *كاميلو خوسيه سيلا*",
  arabic: "💐 *العبارة:* _تعلمنا التاريخ شيئين: أن الأقوياء لم يتفقوا أبدًا مع الأفضل ، وأن السياسة لم تُحاك أبدًا بواسطة السياسيين._",
  translation_id: "💐 *الرأي:* حول السياسة والهيمنة ، من قلم الكاتب العظيم كاميلو خوسيه سيلا.",
  translation_en: "قويون قد يكونون وحيدين ربما.",
},
{
  index: 62,
  latin: "💐 *المؤلف:* *خوسيه أورتيغا غاسيت*",
  arabic: "💐 *العبارة:* _بالأخلاق نصحح أخطاء غرائزنا ، وبالحب نصحح أخطاء أخلاقنا._",
  translation_id: "💐 *الرأي:* يقوم الكاتب الإسباني بتحليل يجب على كل شخص تفسيره.",
  translation_en: "تعلم كيفية الخطأ. ساخر.",
},
    {
    index: 63,
    latin: "💐 *الكاتب:* *نوفاليس*",
    arabic: "💐 *العبارة:* _عندما ترى عملاقًا، فاستفسر أولاً عن موقع الشمس؛ لئلا تكون ظل طاغية._",
    translation_id: "💐 *الرأي:* الخداع أمام البيئة المحيطة به.",
    translation_en: "تصورنا قد يخدعنا، لذا خذ وقتك للتفكير في الأشياء الصغيرة في الحياة."
},
{
    index: 64,
    latin: "💐 *الكاتب:* *أفلاطون*",
    arabic: "💐 *العبارة:* _لا تأتي الفقر من نقص الثروات، بل من تكاثر الرغبات._",
    translation_id: "💐 *الرأي:* رؤية الفيلسوف اليوناني التي تبرز ضرورة تجنب الطمع.",
    translation_en: "الطمع يزيد في الناس بدون طرق."
},
{
    index: 65,
    latin: "💐 *الكاتب:* *أوفيديو*",
    arabic: "💐 *العبارة:* _لا تستسلموا للغضب الزائد؛ فالغضب الطويل يولد الكراهية._",
    translation_id: "💐 *الرأي:* الغضب قد يجلب لنا عواقب وخيمة في حياتنا.",
    translation_en: "عدم الاهتمام بالكراهية."
},
{
    index: 66,
    latin: "💐 *الكاتب:* *كانط*",
    arabic: "💐 *العبارة:* _التعليم هو تطوير الشخص بكامل اكتماله الذي يمكن تحقيقه طبيعته._",
    translation_id: "💐 *الرأي:* لختام اختيار الاقتباسات، هذا تأمل من الفيلسوف الألماني لتوضيح أهمية التعليم.",
    translation_en: "التعليم هو كل شيء."
},
    {
    index: 67,
    latin: "💐 *الكاتب:* *أرتورو بيريث-ريفيرتي*",
    arabic: "💐 *العبارة:* _مشكلة الكلمات هي أنها، بمجرد قولها، لا يمكن أن تعود وحدها إلى صاحبها. لذلك في بعض الأحيان يعيدونها لك على حافة سكين._",
    translation_id: "💐 *الرأي:* الأديب الإسباني، عن قسوة الكلام.",
    translation_en: "تذكر أن تقول الأشياء بشكل جيد، بدون ندم."
},
{
    index: 68,
    latin: "💐 *الكاتب:* *وينستون تشرشل*",
    arabic: "💐 *العبارة:* _الجهد المستمر - ليس القوة أو الذكاء - هو مفتاح تحرير إمكاناتنا._",
    translation_id: "💐 *الرأي:* تأمل أسطوري حول الاستمرارية والتحصيل.",
    translation_en: "كل جهد له مكافأته."
},
{
    index: 69,
    latin: "💐 *الكاتب:* *إرنستو ساباتو*",
    arabic: "💐 *العبارة:* _أن تكون أصيلاً يعني بطريقة ما تكشف عن تواطؤ الآخرين._",
    translation_id: "💐 *الرأي:* إحدى تلك العبارات الحكيمة غير مناسبة للعقول المغلقة.",
    translation_en: "يجب أن تعرف كيف تكون أصيلاً باستناد إلى أفكار موجودة بأسلوب فريد."
},
{
    index: 70,
    latin: "💐 *الكاتب:* *مارك توين*",
    arabic: "💐 *العبارة:* _لا يوجد شيء غريب أو لا يصدق يمكن للإنسان العادي أن لا يصدقه._",
    translation_id: "💐 *الرأي:* الخيال ليس له حدود، للخير أو للشر.",
    translation_en: "تذكر أن تتخيل للخير."
},
    {
  index: 71,
  latin: "💐 *المؤلف:* *نابليون*",
  arabic: "💐 *العبارة:* _لا تقاطع أعدائك أثناء ارتكابهم لخطأ._",
  translation_id: "💐 *الرأي:* نصيحة تكتيكية من هذا الجنرال الشهير.",
  translation_en: "تذكر دائمًا أن تكون لديك ميزات.",
},
{
  index: 72,
  latin: "💐 *المؤلف:* *لَاو تْسِه*",
  arabic: "💐 *العبارة:* _معرفة الآخرين هي حكمة. معرفة النفس هي تنوير._",
  translation_id: "💐 *الرأي:* الإدراك الذاتي كجزء أساسي من الحياة.",
  translation_en: "عليك أن تكون مبادرًا لتعلم بنفسك في الطريق.",
},
{
  index: 73,
  latin: "💐 *المؤلف:* *تشارلز بوكوفسكي*",
  arabic: "💐 *العبارة:* _نحن هنا لنعيش حياتنا بشكل جيد بحيث ترتجف الموت عندما يسلبنا حياتنا._",
  translation_id: "💐 *الرأي:* معتقد حيوي.",
  translation_en: "عيش كما لو كان اليوم الأخير.",
},
{
  index: 74,
  latin: "💐 *المؤلف:* *بي. إف. سكينر*",
  arabic: "💐 *العبارة:* _يجب أن لا نعلم القراءة من الكتب، بل نعلم كيف نحب الكتب._",
  translation_id: "💐 *الرأي:* تعلم من النوع العاطفي.",
  translation_en: "عالم من الحروف...",
},
    {
    index: 75,
    latin: "💐 *الكاتب:* *مارتن لوثر كينغ*",
    arabic: "💐 *العبارة:* _سيزيد حقك كلما عرفت كيف تستمع إلى حق الآخرين._",
    translation_id: "💐 *الرأي:* الحكمة لا تتألف من اكتشافات فردية.",
    translation_en: "ولكنها تشمل ما نتعلمه من الآخرين."
},
{
    index: 76,
    latin: "💐 *الكاتب:* *ماريو بينيديتي*",
    arabic: "💐 *العبارة:* _لا تستسلم، لأن كل يوم هو بداية جديدة، لأن هذه هي اللحظة وأفضل وقت._",
    translation_id: "💐 *الرأي:* وسيلة لرؤية اللحظة الحالية التي تعمل أيضًا كمصدر للتحفيز.",
    translation_en: "يمكن تحقيق السلام إذا كان الجميع متفقًا."
},
{
    index: 77,
    latin: "💐 *الكاتب:* *إيراسموس روترداموس*",
    arabic: "💐 *العبارة:* _أفضل سلام يمكن أن يكون أسوأ من أن يكون أعدل حرب._",
    translation_id: "💐 *الرأي:* تقدير أخلاقي حول قيمة السلام.",
    translation_en: "في الحرب لا يربح أحد، هناك فقط ألم."
},
{
    index: 78,
    latin: "💐 *الكاتب:* *بروخ سبينوزا*",
    arabic: "💐 *العبارة:* _إذا لم ترد تكرار الماضي، فاستمتع بدراسته._",
    translation_id: "💐 *الرأي:* تسمح لنا الذاكرة بالتعلم من أخطائنا، وهذا شيء يجب الاستفادة منه.",
    translation_en: "هو أفضل وسيلة لعدم الوقوع مرة أخرى."
},
    {
  index: 79,
  latin: "💐 *المؤلف:* *أنسيلمو دي كانتربري*",
  arabic: "💐 *العبارة:* _الكوارث تعلمنا التواضع._",
  translation_id: "💐 *الرأي:* حتى الأزمات لديها شيء جيد ، حيث تذكرنا بقوتنا الضئيلة أمام العالم.",
  translation_en: "الإنسان لا يمكنه فعل كل شيء.",
},
{
  index: 80,
  latin: "💐 *المؤلف:* *نيلسون مانديلا*",
  arabic: "💐 *العبارة:* _لا يوجد شيء مثل العودة إلى مكان لا يتغير للعثور على الطرق التي تغيرت بها بنفسك._",
  translation_id: "💐 *الرأي:* تفاعلنا مع البيئة يسمح لنا بفهم أنفسنا بشكل أفضل.",
  translation_en: "تذكير بأن كل شيء يستمر كما هو... إنه شعور جيد.",
},
{
  index: 81,
  latin: "💐 *المؤلف:* *إبيكوروس*",
  arabic: "💐 *العبارة:* _كلما كانت الصعوبة أكبر ، كان هناك مزيد من المجد في التغلب عليها._",
  translation_id: "💐 *الرأي:* الفيلسوف اليوناني ، مؤسس الحياة اللذيذة ، يترك لنا هذه العبارة الملهمة.",
  translation_en: "القدرة على التغلب على الصعاب....",
},
{
  index: 82,
  latin: "💐 *المؤلف:* *فريدريش هيغل*",
  arabic: "💐 *العبارة:* _أن تكون مستقلاً عن الرأي العام هو الشرط الأولى لتحقيق شيء عظيم._",
  translation_id: "💐 *الرأي:* التفكير يجعلنا نرى الأمور بطريقة بديلة.",
  translation_en: "عبارة تتحدث عن الفكر الخاص.",
},
    {
    index: 83,
    latin: "💐 *الكاتب:* *لويبنيتس*",
    arabic: "💐 *العبارة:* _نحن نعيش في أفضل العوالم الممكنة._",
    translation_id: "💐 *الرأي:* على الأقل هذا هو العالم الوحيد الذي نعرفه.",
    translation_en: "بكل مزاياه وعيوبه."
},
{
    index: 84,
    latin: "💐 *الكاتب:* *بنجامين فرانكلين*",
    arabic: "💐 *العبارة:* _من يكون جيدًا في العثور على الأعذار نادرًا ما يكون جيدًا في أي شيء آخر._",
    translation_id: "💐 *الرأي:* الجبناء يجدون أعذارًا بدلاً من مواجهة الواقع.",
    translation_en: "يعرف فقط كيف يتجنب، ولا يواجه."
},
{
    index: 85,
    latin: "💐 *الكاتب:* *نوم تشومسكي*",
    arabic: "💐 *العبارة:* _إذا لم نؤمن بحرية التعبير للأشخاص الذين نحتقرهم، فإننا لا نؤمن بها على الإطلاق._",
    translation_id: "💐 *الرأي:* عبارة تذكرنا بأهمية حرية التعبير.",
    translation_en: "الحرية جيدة عندما نكون حريصين على التعبير بشكل مدروس."
},
{
    index: 86,
    latin: "💐 *الكاتب:* *تاليس*",
    arabic: "💐 *العبارة:* _أصعب شيء في الحياة هو معرفة نفسك._",
    translation_id: "💐 *الرأي:* مفتاح الفهم الذاتي لتحقيق حياة عاطفية صحية.",
    translation_en: "دائماً جيد أن لا نتوقف عن التعلم."
},
    {
  index: 87,
  latin: "💐 *المؤلف:* *إبيتيتو*",
  arabic: "💐 *العبارة:* _ليس ما يحدث لك ، بل كيف تتفاعل هو ما يهم._",
  translation_id: "💐 *الرأي:* حول أهمية تقييم الأحداث بشكل إيجابي.",
  translation_en: "حتى الأشياء السيئة يمكن أن تكون جيدة.",
},
{
  index: 88,
  latin: "💐 *المؤلف:* *جورج سافايل*",
  arabic: "💐 *العبارة:* _الشخص الذي يكون متقنًا في الصبر يمكنه التغلب على كل شيء آخر._",
  translation_id: "💐 *الرأي:* عبارة من الشخصية الشهيرة جورج سافايل تتحدث عن قوة الصبر.",
  translation_en: "إذا كنت تعتبر نفسك شخصًا صبورًا ، فإنك تستحق الكثير كشخص.",
},
{
  index: 89,
  latin: "💐 *المؤلف:* *مارك توين*",
  arabic: "💐 *العبارة:* _لا توجد رؤية أكثر حزنًا من رؤية شاب متشائم._",
  translation_id: "💐 *الرأي:* مارك توين يتحدث عن القيمة المرتبطة بالشباب وخطأ إهدار هذه المرحلة من الحياة.",
  translation_en: "العالم صغير جدًا ليكون حزينًا.",
},
{
  index: 90,
  latin: "💐 *المؤلف:* *أومبرتو إيكو*",
  arabic: "💐 *العبارة:* _لا شيء أكثر ضررًا للإبداع من جنون الإلهام._",
  translation_id: "💐 *الرأي:* عبارة رائعة من الذاكرة دائمًا ، أومبرتو إيكو.",
  translation_en: "لدينا جميعًا فكرة عن الحياة.",
},
    {
    index: 91,
    latin: "💐 *الكاتب:* *إيمرسون*",
    arabic: "💐 *العبارة:* _النجاح يكمن في الحصول على ما ترغب فيه. السعادة تكمن في الاستمتاع بما تحصل عليه._",
    translation_id: "💐 *الرأي:* عبارة يجب أن نحملها دائمًا في رؤوسنا.",
    translation_en: "الاستمتاع بالجهد..."
},
{
    index: 92,
    latin: "💐 *الكاتب:* *هنري ديفيد ثورو*",
    arabic: "💐 *العبارة:* _تعيش معظم الأشخاص الحياة في يأس صامت._",
    translation_id: "💐 *الرأي:* عبارة تحاول شرح تعقيدات الحياة واللحظات الصعبة التي يمكن أن يختبرها الإنسان.",
    translation_en: "تجربة الحياة ورؤية كيف تفاجئنا."
},
{
    index: 93,
    latin: "💐 *الكاتب:* *دي. بير*",
    arabic: "💐 *العبارة:* _كنا سنسير بشكل أفضل إذا لم نكن قد بنينا الكثير من الجدران ولكننا لم نقم ببناء كفاية من الجسور._",
    translation_id: "💐 *الرأي:* عبارة عن أسوأ ما في الإنسان. الجدران لم تكن أبدًا جيدة.",
    translation_en: "تقسيم العالم يجعل كل شيء أقل قوة."
},
{
    index: 94,
    latin: "💐 *الكاتب:* *خايرو فوبير بابون*",
    arabic: "💐 *العبارة:* _التجربة ليست كم تعيش ولكن كل الخير الذي تتعلمه._",
    translation_id: "💐 *الرأي:* التجربة تساعدنا في التعلم.",
    translation_en: "التعلم يعني أن تعترف بأنك لا تعرف كل شيء."
},
    {
  index: 95,
  latin: "💐 *المؤلف:* *شانفور*",
  arabic: "💐 *العبارة:* _التواضع الزائف هو ألطف كل الأكاذيب._",
  translation_id: "💐 *الرأي:* إشارة إلى التواضع الزائف. إذن ، ضمن الأكاذيب ، هو الأقل سوءًا.",
  translation_en: "عليك أن تكون مباشرًا في كل شيء.",
},
{
  index: 96,
  latin: "💐 *المؤلف:* *كارل جونج*",
  arabic: "💐 *العبارة:* _أنت تكون تلك الشيء الذي تفعله ، ليس تلك الشيء الذي تقول إنك ستفعله._",
  translation_id: "💐 *الرأي:* أفعالك تحدد من تكون ، ليس كلماتك.",
  translation_en: "إذا كنت ستقول ذلك ، فأظهر أنك قادر على تحقيقه.",
},
{
  index: 97,
  latin: "💐 *تشارلز ديكنز*",
  arabic: "💐 *العبارة:* _القلب البشري آلة من الأوتار الكثيرة. المعرف الكامل بالناس يعرف كيف يجعلها ترن جميعًا ، كما يفعل موسيقي جيد._",
  translation_id: "💐 *الرأي:* الشخص الذي يعرف نفسه هو شخص قوي.",
  translation_en: "دائمًا هناك شيء جديد لاكتشافه.",
},
    {
    index: 98,
    latin: "💐 *سليمان آش*",
    arabic: "💐 *العبارة:* _يجب فهم معظم الأعمال الاجتماعية في سياقها، حيث يفقدون معناهم إذا عزلوا._",
    translation_id: "💐 *الرأي:* الإنسان هو كائن بيون نفسي اجتماعي.",
    translation_en: "وبمعنى آخر، السياق مهم ويؤثر في كيفية تصرفنا."
},
{
    index: 99,
    latin: "💐 *إيريش فروم*",
    arabic: "💐 *العبارة:* _إذا كانت الشخص يحب شخصًا واحدًا فقط وكانت مست indifferent تجاه الآخرين جميعهم، فإن حبها ليس حبًا، بل هو تعلق تكافؤي أو نزوة ذاتية._",
    translation_id: "💐 *الرأي:* عندما نكون عاشقين لشخص ما، نكون على استعداد لتقديم حياتنا من أجله.",
    translation_en: "يمكن أن نخدع أنفسنا ونعتقد أننا أشخاص جيدين، ولكن حتى أكثر الأنانيين يمكن أن يفقدوا عقولهم بسبب شخص ويبدو وكأنهم أشخاص مفتونين."
}
]
