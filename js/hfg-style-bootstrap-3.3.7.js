$(document).ready(function () {
    var styleBs33Form = $("#bootstrap_3-3-7_form");
    styleBs33Form.change(function () {
        Cookies.set('form_style', $(this).val(), {expires: 30});
        $("#hfg-dialog").dialog('close');
        renderForm();
    });
});


function styleOptions() {
    $('<div class="hfg-form-group">' +
        '<label for="bootstrap_3-3-7_form">' + i18n.form_style + '</label>' +
        '<select class="hfg-form-control" id="bootstrap_3-3-7_form">' +
        '<option value="basic">' + i18n.form_style_basic + '</option>' +
        '<option value="inline">' + i18n.form_style_inline + '</option>' +
        '<option value="horizontal">' + i18n.form_style_horizontal + '</option>' +
        '</select></div>').insertAfter(hfgStyleWrapper);
}

function renderFormTag() {
    var styleBs33Form = $("#bootstrap_3-3-7_form");
    var formTag = '';
    if (styleBs33Form.val() == 'basic') {
        formTag = '<form></form>';
    } else if (styleBs33Form.val() == 'inline') {
        formTag = '<form class="form-inline"></form>';
    } else {
        formTag = '<form class="form-horizontal"></form>';
    }
    resultDiv.append(formTag);
    $('.hfg-sortable>form').sortable();
}

function renderItem(index) {
    var item = formData[index];
    if (resultDiv.find('form').length == 0) {
        renderFormTag();
    }
    var form = resultDiv.find('form');

    var func = 'g' + item.type.charAt(0).toUpperCase() + item.type.slice(1);
    var html = window[func](item, index);

    if (form.find("[data-item-index='" + index + "']").length == 0) {
        form.append(html);
    } else {
        var ori = form.find("[data-item-index='" + index + "']");
        $(html).insertAfter(ori);
        ori.remove();
    }
}

function gText(item, index, realCode) {
    var styleBs33Form = $("#bootstrap_3-3-7_form");
    var html = '';
    if (realCode) {
        if (styleBs33Form.val() == 'basic' || styleBs33Form.val() == 'inline') {
            html = '<div class="form-group"><label>' + item.label + '</label> <input type="text" class="form-control" name="' + item.name + '" placeholder="' + item.placeholder + '"> </div>';
        } else {
            html = '<div class="form-group"> <label class="col-sm-2 control-label">' + item.label + '</label> <div class="col-sm-10"> <input type="text" class="form-control" name="' + item.name + '" placeholder="' + item.placeholder + '"></div></div>';
        }
    } else {
        if (styleBs33Form.val() == 'basic' || styleBs33Form.val() == 'inline') {
            html = '<div class="form-group hfg-item-wrap" data-item-index="' + index + '"><label>' + item.label + '</label> <input type="text" class="form-control" placeholder="' + item.placeholder + '" readonly> </div>';
        } else {
            html = '<div class="form-group hfg-item-wrap" data-item-index="' + index + '"> <label class="col-sm-2 control-label">' + item.label + '</label> <div class="col-sm-10"> <input type="text" class="form-control" placeholder="' + item.placeholder + '" readonly> </div> </div>';
        }
    }
    return html;
}

function gEmail(item, index, realCode) {
    var styleBs33Form = $("#bootstrap_3-3-7_form");
    var html = '';
    if (realCode) {
        if (styleBs33Form.val() == 'basic' || styleBs33Form.val() == 'inline') {
            html = '<div class="form-group"><label>' + item.label + '</label> <input type="email" class="form-control" name="' + item.name + '" placeholder="' + item.placeholder + '"> </div>';
        } else {
            html = '<div class="form-group"> <label class="col-sm-2 control-label">' + item.label + '</label> <div class="col-sm-10"> <input type="text" class="form-control" name="' + item.name + '" placeholder="' + item.placeholder + '"></div></div>';
        }
    } else {
        if (styleBs33Form.val() == 'basic' || styleBs33Form.val() == 'inline') {
            html = '<div class="form-group hfg-item-wrap" data-item-index="' + index + '"><label>' + item.label + '</label> <input type="email" class="form-control" placeholder="' + item.placeholder + '" readonly> </div>';
        } else {
            html = '<div class="form-group hfg-item-wrap" data-item-index="' + index + '"> <label class="col-sm-2 control-label">' + item.label + '</label> <div class="col-sm-10"> <input type="email" class="form-control" placeholder="' + item.placeholder + '" readonly> </div> </div>';
        }
    }
    return html;
}

function gPassword(item, index, realCode) {
    var styleBs33Form = $("#bootstrap_3-3-7_form");
    var html = '';
    if (realCode) {
        if (styleBs33Form.val() == 'basic' || styleBs33Form.val() == 'inline') {
            html = '<div class="form-group"><label>' + item.label + '</label> <input type="password" class="form-control" name="' + item.name + '" placeholder="' + item.placeholder + '"> </div>';
        } else {
            html = '<div class="form-group"> <label class="col-sm-2 control-label">' + item.label + '</label> <div class="col-sm-10"> <input type="text" class="form-control" name="' + item.name + '" placeholder="' + item.placeholder + '"></div></div>';
        }
    } else {
        if (styleBs33Form.val() == 'basic' || styleBs33Form.val() == 'inline') {
            html = '<div class="form-group hfg-item-wrap" data-item-index="' + index + '"><label>' + item.label + '</label> <input type="password" class="form-control" placeholder="' + item.placeholder + '" readonly> </div>';
        } else {
            html = '<div class="form-group hfg-item-wrap" data-item-index="' + index + '"> <label class="col-sm-2 control-label">' + item.label + '</label> <div class="col-sm-10"> <input type="password" class="form-control" placeholder="' + item.placeholder + '" readonly> </div> </div>';
        }
    }
    return html;
}

function gTextarea(item, index, realCode) {
    var styleBs33Form = $("#bootstrap_3-3-7_form");
    var html = '';
    if (realCode) {
        if (styleBs33Form.val() == 'basic' || styleBs33Form.val() == 'inline') {
            html = '<div class="form-group"><label>' + item.label + '</label><textarea class="form-control" name="' + item.name + '" placeholder="' + item.placeholder + '"></textarea></div>';
        } else {
            html = '<div class="form-group"><label class="col-sm-2 control-label">' + item.label + '</label> <div class="col-sm-10"><textarea class="form-control" name="' + item.name + '" placeholder="' + item.placeholder + '"></textarea></div></div>';
        }
    } else {
        if (styleBs33Form.val() == 'basic' || styleBs33Form.val() == 'inline') {
            html = '<div class="form-group hfg-item-wrap" data-item-index="' + index + '"> <label>' + item.label + '</label><textarea class="form-control" placeholder="' + item.placeholder + '" readonly></textarea></div>';
        } else {
            html = '<div class="form-group hfg-item-wrap" data-item-index="' + index + '"> <label class="col-sm-2 control-label">' + item.label + '</label> <div class="col-sm-10"><textarea class="form-control" placeholder="' + item.placeholder + '" readonly></textarea></div></div>';
        }
    }
    return html;
}

function gRadio(item, index, realCode) {
    var styleBs33Form = $("#bootstrap_3-3-7_form");
    var html = '';
    if (realCode) {
        if (styleBs33Form.val() == 'basic' || styleBs33Form.val() == 'inline') {
            html += '<div class="form-group"><label>' + item.label + '</label>';
            item.values.replace('\r\n', '\n').split('\n').forEach(function (v, i) {
                v = v.replace('，', ',').split(',');
                if (v[1] == undefined) {
                    v[1] = v[0];
                }
                if (item.style == 'default') {
                    html += '<div class="radio"><label><input type="radio" name="' + item.name + '" value="' + v[0] + '">' + v[1] + '</label></div>';
                } else if (item.style == 'inline') {
                    html += '<label class="radio-inline"><input type="radio" name="' + item.name + '" value="' + v[0] + '">' + v[1] + '</label>';
                }
            });
            html += '</div>';
        } else {
            html += '<div class="form-group"><label class="col-sm-2 control-label">' + item.label + '</label><div class="col-sm-10">';
            item.values.replace('\r\n', '\n').split('\n').forEach(function (v, i) {
                v = v.replace('，', ',').split(',');
                if (v[1] == undefined) {
                    v[1] = v[0];
                }
                if (item.style == 'default') {
                    html += '<div class="radio"><label><input type="radio" name="' + item.name + '" value="' + v[0] + '">' + v[1] + '</label></div>';
                } else if (item.style == 'inline') {
                    html += '<label class="radio-inline"><input type="radio" name="' + item.name + '" value="' + v[0] + '">' + v[1] + '</label>';
                }
            });
            html += '</div></div>';
        }
    } else {
        if (styleBs33Form.val() == 'basic' || styleBs33Form.val() == 'inline') {
            html += '<div class="form-group hfg-item-wrap" data-item-index="' + index + '"><label>' + item.label + '</label>';
            item.values.replace('\r\n', '\n').split('\n').forEach(function (v, i) {
                v = v.replace('，', ',').split(',');
                if (v[1] == undefined) {
                    v[1] = v[0];
                }
                if (item.style == 'default') {
                    html += '<div class="radio"><label><input type="radio" name="' + item.name + '" value="' + v[0] + '">' + v[1] + '</label></div>';
                } else if (item.style == 'inline') {
                    html += '<label class="radio-inline"><input type="radio" name="' + item.name + '" value="' + v[0] + '">' + v[1] + '</label>';
                }
            });
            html += '</div>';
        } else {
            html += '<div class="form-group hfg-item-wrap" data-item-index="' + index + '"><label class="col-sm-2 control-label">' + item.label + '</label><div class="col-sm-10">';
            item.values.replace('\r\n', '\n').split('\n').forEach(function (v, i) {
                v = v.replace('，', ',').split(',');
                if (v[1] == undefined) {
                    v[1] = v[0];
                }
                if (item.style == 'default') {
                    html += '<div class="radio"><label><input type="radio" name="' + item.name + '" value="' + v[0] + '">' + v[1] + '</label></div>';
                } else if (item.style == 'inline') {
                    html += '<label class="radio-inline"><input type="radio" name="' + item.name + '" value="' + v[0] + '">' + v[1] + '</label>';
                }
            });
            html += '</div></div>';
        }
    }
    return html;
}

function gCheckbox(item, index, realCode) {
    var styleBs33Form = $("#bootstrap_3-3-7_form");
    var html = '';
    if (realCode) {
        if (styleBs33Form.val() == 'basic' || styleBs33Form.val() == 'inline') {
            html += '<div class="form-group"><label>' + item.label + '</label>';
            item.values.replace('\r\n', '\n').split('\n').forEach(function (v, i) {
                v = v.replace('，', ',').split(',');
                if (v[1] == undefined) {
                    v[1] = v[0];
                }
                if (item.style == 'default') {
                    html += '<div class="checkbox"><label><input type="checkbox" name="' + item.name + '" value="' + v[0] + '">' + v[1] + '</label></div>';
                } else if (item.style == 'inline') {
                    html += '<label class="checkbox-inline"><input type="checkbox" name="' + item.name + '" value="' + v[0] + '">' + v[1] + '</label>';
                }
            });
            html += '</div>';
        } else {
            html += '<div class="form-group"><label class="col-sm-2 control-label">' + item.label + '</label><div class="col-sm-10">';
            item.values.replace('\r\n', '\n').split('\n').forEach(function (v, i) {
                v = v.replace('，', ',').split(',');
                if (v[1] == undefined) {
                    v[1] = v[0];
                }
                if (item.style == 'default') {
                    html += '<div class="checkbox"><label><input type="checkbox" name="' + item.name + '" value="' + v[0] + '">' + v[1] + '</label></div>';
                } else if (item.style == 'inline') {
                    html += '<label class="checkbox-inline"><input type="checkbox" name="' + item.name + '" value="' + v[0] + '">' + v[1] + '</label>';
                }
            });
            html += '</div></div>';
        }
    } else {
        if (styleBs33Form.val() == 'basic' || styleBs33Form.val() == 'inline') {
            html += '<div class="form-group hfg-item-wrap" data-item-index="' + index + '"><label>' + item.label + '</label>';
            item.values.replace('\r\n', '\n').split('\n').forEach(function (v, i) {
                v = v.replace('，', ',').split(',');
                if (v[1] == undefined) {
                    v[1] = v[0];
                }
                if (item.style == 'default') {
                    html += '<div class="checkbox"><label><input type="checkbox" name="' + item.name + '" value="' + v[0] + '">' + v[1] + '</label></div>';
                } else if (item.style == 'inline') {
                    html += '<label class="checkbox-inline"><input type="checkbox" name="' + item.name + '" value="' + v[0] + '">' + v[1] + '</label>';
                }
            });
            html += '</div>';
        } else {
            html += '<div class="form-group hfg-item-wrap" data-item-index="' + index + '"><label class="col-sm-2 control-label">' + item.label + '</label><div class="col-sm-10">';
            item.values.replace('\r\n', '\n').split('\n').forEach(function (v, i) {
                v = v.replace('，', ',').split(',');
                if (v[1] == undefined) {
                    v[1] = v[0];
                }
                if (item.style == 'default') {
                    html += '<div class="checkbox"><label><input type="checkbox" name="' + item.name + '" value="' + v[0] + '">' + v[1] + '</label></div>';
                } else if (item.style == 'inline') {
                    html += '<label class="checkbox-inline"><input type="checkbox" name="' + item.name + '" value="' + v[0] + '">' + v[1] + '</label>';
                }
            });
            html += '</div></div>';
        }
    }
    return html;
}

function gSelect(item, index, realCode) {
    var styleBs33Form = $("#bootstrap_3-3-7_form");
    var html = '';
    if (realCode) {
        if (styleBs33Form.val() == 'basic' || styleBs33Form.val() == 'inline') {
            html += '<div class="form-group"><label>' + item.label + '</label><select name="' + item.name + '" class="form-control">';
            item.values.replace('\r\n', '\n').split('\n').forEach(function (v, i) {
                v = v.replace('，', ',').split(',');
                if (v[1] == undefined) {
                    v[1] = v[0];
                }
                html += '<option value="' + v[0] + '">' + v[1] + '</option>';
            });
            html += '</select></div>';
        } else {
            html += '<div class="form-group"><label class="col-sm-2 control-label">' + item.label + '</label><div class="col-sm-10"><select name="' + item.name + '" class="form-control">';
            item.values.replace('\r\n', '\n').split('\n').forEach(function (v, i) {
                v = v.replace('，', ',').split(',');
                if (v[1] == undefined) {
                    v[1] = v[0];
                }
                html += '<option value="' + v[0] + '">' + v[1] + '</option>';
            });
            html += '</select></div></div>';
        }
    } else {
        if (styleBs33Form.val() == 'basic' || styleBs33Form.val() == 'inline') {
            html += '<div class="form-group hfg-item-wrap" data-item-index="' + index + '"><label>' + item.label + '</label><select name="' + item.name + '" class="form-control">';
            item.values.replace('\r\n', '\n').split('\n').forEach(function (v, i) {
                v = v.replace('，', ',').split(',');
                if (v[1] == undefined) {
                    v[1] = v[0];
                }
                html += '<option value="' + v[0] + '">' + v[1] + '</option>';
            });
            html += '</select></div>';
        } else {
            html += '<div class="form-group hfg-item-wrap" data-item-index="' + index + '"><label class="col-sm-2 control-label">' + item.label + '</label><div class="col-sm-10"><select name="' + item.name + '" class="form-control">';
            item.values.replace('\r\n', '\n').split('\n').forEach(function (v, i) {
                v = v.replace('，', ',').split(',');
                if (v[1] == undefined) {
                    v[1] = v[0];
                }
                html += '<option value="' + v[0] + '">' + v[1] + '</option>';
            });
            html += '</select></div></div>';
        }
    }
    return html;
}

function gButton(item, index, realCode) {
    var styleBs33Form = $("#bootstrap_3-3-7_form");
    var html = '';
    if (realCode) {
        if (styleBs33Form.val() == 'basic' || styleBs33Form.val() == 'inline') {
            html = '<div class="form-group"><button type="button" id="' + item.id + '" class="btn btn-default">' + item.label + '</button></div>';
        } else {
            html = '<div class="form-group"><label class="col-sm-2"></label><div class="col-sm-10"><button type="button" id="' + item.id + '" class="btn btn-default">' + item.label + '</button></div></div>';
        }
    } else {
        if (styleBs33Form.val() == 'basic' || styleBs33Form.val() == 'inline') {
            html = '<div class="form-group hfg-item-wrap" data-item-index="' + index + '"><button type="button" id="' + item.id + '" class="btn btn-default">' + item.label + '</button></div>';
        } else {
            html = '<div class="form-group hfg-item-wrap" data-item-index="' + index + '"><label class="col-sm-2"></label><div class="col-sm-10"><button type="button" id="' + item.id + '" class="btn btn-default">' + item.label + '</button></div> </div>';
        }
    }
    return html;
}


function generateHtml() {
    var styleBs33Form = $("#bootstrap_3-3-7_form");
    var html = '';
    if (styleBs33Form.val() == 'basic') {
        html = '<form>';
    } else if (styleBs33Form.val() == 'inline') {
        html = '<form class="form-inline">';
    } else {
        html = '<form class="form-horizontal">';
    }
    formData.forEach(function (v, i) {
        html += generateItem(i);
    });
    html += '</form>';
    return html;
}
function generateItem(index) {
    var item = formData[index];

    var func = 'g' + item.type.charAt(0).toUpperCase() + item.type.slice(1);
    return window[func](item, index, 1);
}
