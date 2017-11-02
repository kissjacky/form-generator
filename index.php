<?php
$lang = [
    'zh_CN' => [
        'title' => 'HTML 表单 生成工具',
        'style' => '风格',
        'style_native' => '原生',
        'form_style' => '表单样式',
        'form_style_basic' => '标准',
        'form_style_inline' => '内联',
        'form_style_horizontal' => '水平排列',
        'text_label_default' => '文本框',
        'input_text' => '文本框',
        'textarea' => '文本域',
        'password' => '密码框',
        'radio' => '单选按钮',
        'item_style_default' => '默认',
        'item_style_inline' => '内联',
        'checkbox' => '复选框',
        'button' => '按钮',
        'email' => 'Email',
        'select' => '下拉选框',
        'values_desc' => '选项："value,描述"',
        'instruction' => '说明',
        'instruction_text' => '<p>可视化地生成Html表单代码，减少工程师手动码转的辛苦</p>
<p>产品经理亦可直接使用此工具，直接交付工程师纯净标准的HTML代码。岂不美哉？</p>
<p>Bootstrap风格用的是v3.3.7 实际上3.x版本的都可以直接使用，不存在兼容性问题</p>
<br><p>&copy; <a href="https://qingyu.me">qingyu</a></p>',
        'generate_html' => '生成HTML',
        'generated_html' => '结果HTML',
    ],
    'en_US' => [
        'title' => 'HTML Form Generator',
        'style' => 'Style',
        'style_native' => 'Native',
        'form_style' => 'Form Style',
        'form_style_basic' => 'Basic',
        'form_style_inline' => 'Inline',
        'form_style_horizontal' => 'Horizontal',
        'text_label_default' => 'Input',
        'input_text' => 'Text Input',
        'textarea' => 'Textarea',
        'password' => 'Password',
        'radio' => 'Radio',
        'item_style_default' => 'Default',
        'item_style_inline' => 'Inline',
        'checkbox' => 'Checkbox',
        'button' => 'Button',
        'email' => 'Email',
        'select' => 'Select',
        'values_desc' => 'Options: "value,label"',
        'instruction' => 'Instructions',
        'instruction_text' => '<p>Generate HTML Form code, reduce the hard manual work of engineers</p>
<p>You can also use it if you’re a PM, directly deliver the code to your R&D, isn\'t that wonderful?</p>
<p>Bootstrap v3.3.7 achieved, in fact, all v3.x are painless.</p><br><p>&copy; <a href="https://qingyu.me">qingyu</a></p>',
        'generate_html' => 'Generate HTML',
        'generated_html' => 'Generated HTML',
    ],
];
$lang_id = empty($_COOKIE['switch_lang_id']) ? 'zh_CN' : $_COOKIE['switch_lang_id'];
$i18n = $lang[$lang_id];

$style = empty($_COOKIE['style']) ? 'native' : $_COOKIE['style'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title><?=$i18n['title']?></title>
	<link rel="stylesheet" type="text/css" href="css/jquery-ui.min.css">
	<link rel="stylesheet" type="text/css" href="css/jquery-ui.theme.min.css">
    <?php if ($style == 'native') { ?>

    <?php } elseif ($style == 'bootstrap_3-3-7') { ?>
		<link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <?php } elseif ($style == 'materialize') { ?>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
    <?php } ?>
	<style>

		* {
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
		}

		body {
			background-color: black;
			background-image: radial-gradient(white, rgba(255, 255, 255, .2) 2px, transparent 40px),
			radial-gradient(white, rgba(255, 255, 255, .15) 1px, transparent 30px),
			radial-gradient(white, rgba(255, 255, 255, .1) 2px, transparent 40px),
			radial-gradient(rgba(255, 255, 255, .4), rgba(255, 255, 255, .1) 2px, transparent 30px);
			background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
			background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
		}

		#comment-div { min-height: 100px; padding: 15px 20px; background-color: white; border-radius: 4px; }

		#result-div { min-height: 100px; padding: 15px 20px; background-color: white; border-radius: 4px; margin: 0 10px; }

		#template-div { background-color: white; border-radius: 4px; padding: 15px 20px; }

		#template-div > div { margin-bottom: 10px; }

		h1, h2, h3, h4, h5, h6 {
			font-family: inherit;
			font-weight: 500;
			line-height: 1.1;
			color: inherit;
		}

		h1, h2, h3 {
			margin-top: 20px;
			margin-bottom: 10px;
		}

		h3 {
			font-size: 24px;
		}

		:after, :before {
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
		}

		.hfg-container { width: 80%; margin: 0 auto; }

		.hfg-row:before {
			display: table;
			content: " ";
		}

		.hfg-row:after {
			clear: both;
		}

		.hfg-col-2 { width: 16.66666667%; float: left; min-height: 100px; }

		.hfg-col-4 { width: 33.33333333%; float: left; min-height: 100px; }

		.hfg-col-6 { width: 50%; float: left; min-height: 100px; }

		.hfg-col-12 { width: 100%; float: left; }

		.hfg-form-inline { margin: 0 0 6px; display: inline-block;
			background-color: white; padding: 10px 15px;
			border-radius: 4px; }

		.hfg-form-group { display: inline-block; margin-right: 6px; }

		.hfg-item-wrap { position: relative; }

		.hfg-item-wrap .hfg-remove-btn { position: absolute; right: 0; top: 0; }

		.hfg-hidden { display: none; }

		.hfg-dialog label {
			display: block;
		}
	</style>
</head>
<body>

<div class="hfg-container">
	<div><h3 style="color: #f3f3f3;"><?=$i18n['title']?></h3></div>
	<div class="hfg-row">
		<div class="hfg-col-12">
			<form class="hfg-form-inline" onsubmit="return false">
				<div class="hfg-form-group">
					<select class="hfg-form-control" id="lang">
						<option value="zh_CN">简体中文</option>
						<option value="en_US">English</option>
					</select>
				</div>
				<div class="hfg-form-group" id="hfg-style-wrapper">
					<label for="style"><?=$i18n['style']?></label>
					<select class="hfg-form-control" id="style">
						<option value="native"><?=$i18n['style_native']?></option>
						<option value="bootstrap_3-3-7">Bootstrap v3.3.7</option>
					</select>
				</div>
			</form>
		</div>
	</div>
	<div class="hfg-row">
		<div class="hfg-col-2" id="comment-div">
			<h4>
                <?=$i18n['instruction']?>
			</h4>
            <?=$i18n['instruction_text']?>
		</div>
		<div class="hfg-col-6">
			<div class="hfg-sortable" id="result-div"></div>
		</div>
		<div class="hfg-col-4" id="template-div">
			<div>
				<button type="button" class="tem-btn" data-type="text">+</button>
				<label class="control-label"><?=$i18n['input_text']?></label>
				<input type="text" value="" placeholder="">
			</div>
			<div>
				<button type="button" class="tem-btn" data-type="email">+</button>
				<label class="control-label"><?=$i18n['email']?></label>
				<input type="email" value="" placeholder="">
			</div>
			<div>
				<button type="button" class="tem-btn" data-type="password">+</button>
				<label class="control-label"><?=$i18n['password']?></label>
				<input type="password" value="" placeholder="">
			</div>
			<div>
				<button type="button" class="tem-btn" data-type="textarea">+</button>
				<label class="control-label"><?=$i18n['textarea']?></label>
				<textarea placeholder="" rows="1"></textarea>
			</div>
			<div>
				<button type="button" class="tem-btn" data-type="radio">+</button>
				<label class="control-label"><?=$i18n['radio']?></label>
				<input type="radio" value="" placeholder="">
				<input type="radio" value="" placeholder="">
			</div>
			<div>
				<button type="button" class="tem-btn" data-type="checkbox">+</button>
				<label class="control-label"><?=$i18n['checkbox']?></label>
				<input type="checkbox" value="" placeholder="">
				<input type="checkbox" value="" placeholder="">
			</div>
			<div>
				<button type="button" class="tem-btn" data-type="button">+</button>
				<label class="control-label"><?=$i18n['button']?></label>
				<button type="button"><?=$i18n['button']?></button>
			</div>
			<div>
				<button type="button" class="tem-btn" data-type="select">+</button>
				<label class="control-label"><?=$i18n['select']?></label>
				<select>
					<option>A</option>
					<option>B</option>
				</select>
			</div>

			<div style="text-align: right">
				<button type="button" id="generateHtmlBtn"><?=$i18n['generate_html']?></button>
				<button type="button" id="generateJsonBtn" style="display: none;">JSON</button>
			</div>
		</div>
	</div>
</div>


<div class="hfg-dialog" style="display: none;" id="hfg-dialog" title="<?=$i18n['input_text']?>" data-item-index="">
	<div>
		<label>Name</label><input type="text" name="name">
	</div>
	<div>
		<label>id</label><input type="text" name="id">
	</div>
	<div>
		<label>Label Text</label><input type="text" name="label">
	</div>
	<div>
		<label>Placeholder</label><input type="text" name="placeholder">
	</div>
	<div>
		<label><?=$i18n['values_desc']?></label><textarea rows="4" name="values"></textarea>
	</div>
	<div>
		<label>Style</label>
		<input type="radio" name="style" value="default"><?=$i18n['item_style_default']?>
		<input type="radio" name="style" value="inline"><?=$i18n['item_style_inline']?>
	</div>
</div>

<div style="display: none;" id="generate-dialog" title="<?=$i18n['generated_html']?>">
	<textarea rows="20" style="width: 100%;" title="html">

	</textarea>
</div>


<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script src="js/jquery-ui.min.js"></script>
<script src="js/js.cookie.js"></script>
<script>
    var formData = [];
    var styleNode = $('#style');
    var resultDiv = $('#result-div');
    var i18n = <?=json_encode($i18n)?>;
    var hfgStyleWrapper = $('#hfg-style-wrapper');
    $('#generateHtmlBtn').click(function () {
        var html = generateHtml();
        $('#generate-dialog>textarea').val(html);
        $('#generate-dialog').dialog({autoOpen: false, width: '60%'}).dialog('open');
    });
    $('#generateJsonBtn').click(function () {
        alert(formData.toString());
    });

    $(document).ready(function () {

        var langSwitch = $("#lang");
        langSwitch.find("option[value='<?=$lang_id?>']").prop("selected", true);
        langSwitch.change(function () {
            Cookies.set('switch_lang_id', $(this).val(), {expires: 30});
            location.reload();
        });

        styleNode.find("option[value='<?=$style?>']").prop("selected", true);
        styleOptions();
        styleNode.change(function () {
            Cookies.set('style', $(this).val(), {expires: 30});
            location.reload();
        });
        renderForm();


        $('.tem-btn').click(function () {
            var type = $(this).data('type');
            var item;
            switch (type) {
                case 'text':
                    item = {
                        type: type,
                        name: 't_name',
                        label: i18n.text_label_default,
                        value: '',
                        placeholder: ''
                    };
                    break;
                case 'email':
                    item = {
                        type: type,
                        name: 'e_name',
                        label: i18n.email,
                        value: '',
                        placeholder: ''
                    };
                    break;
                case 'password':
                    item = {
                        type: type,
                        name: 'p_name',
                        label: i18n.password,
                        value: '',
                        placeholder: ''
                    };
                    break;
                case 'textarea':
                    item = {
                        type: type,
                        name: 'ta_name',
                        label: i18n.textarea,
                        value: '',
                        placeholder: ''
                    };
                    break;
                case 'radio':
                    item = {
                        type: type,
                        name: 'radio_name',
                        label: i18n.radio,
                        values: '1,A\n2,B\n3,C',
                        style: 'default'//default || inline
                    };
                    break;
                case 'checkbox':
                    item = {
                        type: type,
                        name: 'checkbox_name',
                        label: i18n.checkbox,
                        values: '1,A\n2,B\n3,C',
                        style: 'default'//default || inline
                    };
                    break;
                case 'select':
                    item = {
                        type: type,
                        name: 's_name',
                        label: i18n.select,
                        values: '1,A\n2,B\n3,C'
                    };
                    break;
                case 'button':
                    item = {
                        type: type,
                        id: 'btn_id',
                        label: i18n.button
                    };
                    break;
                default:
                    break;
            }
            formData.push(item);
            renderItem(formData.length - 1);
        });


        var hfgDialog = $("#hfg-dialog").dialog({autoOpen: false});
        hfgDialog.find('input[name=id]').keyup(function () {
            var index = $(this).parent().parent().data('item-index');
            formData[index].id = $(this).val();
            renderItem(index);
        });
        hfgDialog.find('input[name=name]').keyup(function () {
            var index = $(this).parent().parent().data('item-index');
            formData[index].name = $(this).val();
            renderItem(index);
        });
        hfgDialog.find('input[name=label]').keyup(function () {
            var index = $(this).parent().parent().data('item-index');
            formData[index].label = $(this).val();
            renderItem(index);
        });
        hfgDialog.find('input[name=placeholder]').keyup(function () {
            var index = $(this).parent().parent().data('item-index');
            formData[index].placeholder = $(this).val();
            renderItem(index);
        });
        hfgDialog.find('textarea[name=values]').keyup(function () {
            var index = $(this).parent().parent().data('item-index');
            formData[index].values = $(this).val();
            renderItem(index);
        });
        hfgDialog.find('input[name=style]').change(function () {
            var index = $(this).parent().parent().data('item-index');
            formData[index].style = this.value;
            console.log(formData[index]);
            renderItem(index);
        });


        resultDiv.on('mouseenter', '.hfg-item-wrap', function () {
            $(this).append('<button class="hfg-remove-btn" type="button">x</button>');
        }).on('mouseleave', '.hfg-item-wrap', function () {
            $(this).find('.hfg-remove-btn').remove();
        }).on('click', '.hfg-item-wrap', function () {
            var index = $(this).data('item-index');
            var item = formData[index];
            hfgDialog.children().addClass('hfg-hidden');
            hfgDialog.data('item-index', index);
            console.log(item);
            switch (item.type) {
                case 'text':
                    hfgDialog.find('input[name=name]').val(item.name).parent().removeClass('hfg-hidden');
                    hfgDialog.find('input[name=label]').val(item.label).parent().removeClass('hfg-hidden');
                    hfgDialog.find('input[name=placeholder]').val(item.placeholder).parent().removeClass('hfg-hidden');
                    break;
                case 'email':
                    hfgDialog.find('input[name=name]').val(item.name).parent().removeClass('hfg-hidden');
                    hfgDialog.find('input[name=label]').val(item.label).parent().removeClass('hfg-hidden');
                    hfgDialog.find('input[name=placeholder]').val(item.placeholder).parent().removeClass('hfg-hidden');
                    break;
                case 'password':
                    hfgDialog.find('input[name=name]').val(item.name).parent().removeClass('hfg-hidden');
                    hfgDialog.find('input[name=label]').val(item.label).parent().removeClass('hfg-hidden');
                    hfgDialog.find('input[name=placeholder]').val(item.placeholder).parent().removeClass('hfg-hidden');
                    break;
                case 'textarea':
                    hfgDialog.find('input[name=name]').val(item.name).parent().removeClass('hfg-hidden');
                    hfgDialog.find('input[name=label]').val(item.label).parent().removeClass('hfg-hidden');
                    hfgDialog.find('input[name=placeholder]').val(item.placeholder).parent().removeClass('hfg-hidden');
                    break;
                case 'radio':
                    hfgDialog.find('input[name=name]').val(item.name).parent().removeClass('hfg-hidden');
                    hfgDialog.find('input[name=label]').val(item.label).parent().removeClass('hfg-hidden');
                    hfgDialog.find('textarea[name=values]').val(item.values).parent().removeClass('hfg-hidden');
                <?php if($style == 'bootstrap_3-3-7'){?>
                    hfgDialog.find('input[name=style][value=' + item.style + ']').prop("checked", true).parent().removeClass('hfg-hidden');
                <?php }?>
                    break;
                case 'checkbox':
                    hfgDialog.find('input[name=name]').val(item.name).parent().removeClass('hfg-hidden');
                    hfgDialog.find('input[name=label]').val(item.label).parent().removeClass('hfg-hidden');
                    hfgDialog.find('textarea[name=values]').val(item.values).parent().removeClass('hfg-hidden');
                <?php if($style == 'bootstrap_3-3-7'){?>
                    hfgDialog.find('input[name=style][value=' + item.style + ']').prop("checked", true).parent().removeClass('hfg-hidden');
                <?php }?>
                    break;
                case 'select':
                    hfgDialog.find('input[name=name]').val(item.name).parent().removeClass('hfg-hidden');
                    hfgDialog.find('input[name=label]').val(item.label).parent().removeClass('hfg-hidden');
                    hfgDialog.find('textarea[name=values]').val(item.values).parent().removeClass('hfg-hidden');
                    break;
                case 'button':
                    hfgDialog.find('input[name=id]').val(item.name).parent().removeClass('hfg-hidden');
                    hfgDialog.find('input[name=label]').val(item.label).parent().removeClass('hfg-hidden');
                    break;
            }
            hfgDialog.dialog("option", "position", {my: "top", at: "right top", of: $(this)}).dialog('open');
        }).on('click', '.hfg-remove-btn', function (e) {
            e.stopPropagation();
            var p = $(this).parent();
            formData.splice(p.data('index'), 1);
            renderForm();
        });

    });

    function renderForm() {
        resultDiv.empty();
        renderFormTag();
        formData.forEach(function (v, i) {
            renderItem(i);
        });
    }
</script>
<?php if ($style == 'native') { ?>
	<script src="js/hfg-style-native.js"></script><?php } elseif ($style == 'bootstrap_3-3-7') { ?>
	<script src="js/hfg-style-bootstrap-3.3.7.js"></script>
<?php } elseif ($style == 'materialize') { ?>

<?php } ?>
</body>
</html>
