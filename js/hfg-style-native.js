$(document).ready(function () {

});


function styleOptions() {
    $('<div class="hfg-form-group">' +
        '</div>').insertAfter(hfgStyleWrapper);
}

function renderFormTag() {
    var formTag = '<form></form>';
    resultDiv.append(formTag);
    $('.hfg-sortable>form').sortable({
        update: function (event, ui) {
            sortFormData();
        }
    }).disableSelection();
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
    var html = '';
    if (realCode) {
        html = '<div>' + item.label + ':<br><input type="text" name="' + item.name + '" placeholder="' + item.placeholder + '"></div>';
    } else {
        html = '<div class="hfg-item-wrap" data-item-index="' + index + '">' + item.label + ':<br><input type="text" placeholder="' + item.placeholder + '" readonly></div>';
    }
    return html;
}

function gEmail(item, index, realCode) {
    var html = '';
    if (realCode) {
        html = '<div>' + item.label + ':<br><input type="email" name="' + item.name + '" placeholder="' + item.placeholder + '"></div>';
    } else {
        html = '<div class="hfg-item-wrap" data-item-index="' + index + '">' + item.label + ':<br><input type="email" placeholder="' + item.placeholder + '" readonly></div>';
    }
    return html;
}

function gPassword(item, index, realCode) {
    var html = '';
    if (realCode) {
        html = '<div>' + item.label + ':<br><input type="password" name="' + item.name + '" placeholder="' + item.placeholder + '"></div>';
    } else {
        html = '<div class="hfg-item-wrap" data-item-index="' + index + '">' + item.label + ':<br><input type="password" placeholder="' + item.placeholder + '" readonly></div>';
    }
    return html;
}

function gTextarea(item, index, realCode) {
    var html = '';
    if (realCode) {
        html = '<div >' + item.label + ':<br><textarea name="' + item.name + '" placeholder="' + item.placeholder + '"></textarea></div>';
    } else {
        html = '<div class="hfg-item-wrap" data-item-index="' + index + '">' + item.label + ':<br><textarea placeholder="' + item.placeholder + '" readonly></textarea></div>';
    }
    return html;
}

function gRadio(item, index, realCode) {
    var html = '';
    if (realCode) {
        html += '<div>' + item.label + ':<br>';
        item.values.replace('\r\n', '\n').split('\n').forEach(function (v, i) {
            v = v.replace('，', ',').split(',');
            if (v[1] == undefined) {
                v[1] = v[0];
            }
            html += '<input type="radio" name="' + item.name + '" value="' + v[0] + '">' + v[1];
        });
        html += '</div>';
    } else {
        html += '<div class="hfg-item-wrap" data-item-index="' + index + '">' + item.label + ':<br>';
        item.values.replace('\r\n', '\n').split('\n').forEach(function (v, i) {
            v = v.replace('，', ',').split(',');
            if (v[1] == undefined) {
                v[1] = v[0];
            }
            html += '<input type="radio" name="' + item.name + '" value="' + v[0] + '" readonly>' + v[1];
        });
        html += '</div>';
    }
    return html;
}

function gCheckbox(item, index, realCode) {
    var html = '';
    if (realCode) {
        html += '<div>' + item.label + ':<br>';
        item.values.replace('\r\n', '\n').split('\n').forEach(function (v, i) {
            v = v.replace('，', ',').split(',');
            if (v[1] == undefined) {
                v[1] = v[0];
            }
            html += '<input type="checkbox" name="' + item.name + '" value="' + v[0] + '">' + v[1];
        });
        html += '</div>';
    } else {
        html += '<div class="hfg-item-wrap" data-item-index="' + index + '">' + item.label + ':<br>';
        item.values.replace('\r\n', '\n').split('\n').forEach(function (v, i) {
            v = v.replace('，', ',').split(',');
            if (v[1] == undefined) {
                v[1] = v[0];
            }
            html += '<input type="checkbox" name="' + item.name + '" value="' + v[0] + '" readonly>' + v[1];
        });
        html += '</div>';
    }
    return html;
}

function gSelect(item, index, realCode) {
    var html = '';
    if (realCode) {
        html += '<div>' + item.label + ':<br><select name="' + item.name + '">';
        item.values.replace('\r\n', '\n').split('\n').forEach(function (v, i) {
            v = v.replace('，', ',').split(',');
            if (v[1] == undefined) {
                v[1] = v[0];
            }
            html += '<option value="' + v[0] + '">' + v[1] + '</option>';
        });
        html += '</select></div>';
    } else {
        html += '<div class="hfg-item-wrap" data-item-index="' + index + '">' + item.label + ':<br><select name="' + item.name + '">';
        item.values.replace('\r\n', '\n').split('\n').forEach(function (v, i) {
            v = v.replace('，', ',').split(',');
            if (v[1] == undefined) {
                v[1] = v[0];
            }
            html += '<option value="' + v[0] + '" readonly>' + v[1] + '</option>';
        });
        html += '</select></div>';
    }
    return html;
}

function gButton(item, index, realCode) {
    var html = '';
    if (realCode) {
        html = '<div>' + item.label + ':<br><button type="button" id="' + item.id + '"></button></div>';
    } else {
        html = '<div class="hfg-item-wrap" data-item-index="' + index + '">' + item.label + ':<br><button type="button" readonly>' + i18n.button + '</button></div>';
    }
    return html;
}


function generateHtml() {
    var styleBs33Form = $("#bootstrap_3-3-7_form");
    var html = '';
    html = '<form>';
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
