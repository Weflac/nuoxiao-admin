var FormControls = function() {
    var e = function() {
        $("#m_form_1").validate({
            rules: {
                email: {
                    required: !0,
                    email: !0
                },
                url: {
                    required: !0
                },
                digits: {
                    required: !0,
                    digits: !0
                },
                creditcard: {
                    required: !0,
                    creditcard: !0
                },
                phone: {
                    required: !0,
                    phoneUS: !0
                },
                option: {
                    required: !0
                },
                options: {
                    required: !0,
                    minlength: 2,
                    maxlength: 4
                },
                memo: {
                    required: !0,
                    minlength: 10,
                    maxlength: 100
                },
                checkbox: {
                    required: !0
                },
                checkboxes: {
                    required: !0,
                    minlength: 1,
                    maxlength: 2
                },
                radio: {
                    required: !0
                }
            },
            invalidHandler: function(e, r) {
                var i = $("#m_form_1_msg");
                i.removeClass("m--hide").show(),
                mApp.scrollTo(i, -200)
            },
            submitHandler: function(e) {}
        })
    },
    r = function() {
        $("#m_form_2").validate({
            rules: {
                email: {
                    required: !0,
                    email: !0
                },
                url: {
                    required: !0
                },
                digits: {
                    required: !0,
                    digits: !0
                },
                creditcard: {
                    required: !0,
                    creditcard: !0
                },
                phone: {
                    required: !0,
                    phoneUS: !0
                },
                option: {
                    required: !0
                },
                options: {
                    required: !0,
                    minlength: 2,
                    maxlength: 4
                },
                memo: {
                    required: !0,
                    minlength: 10,
                    maxlength: 100
                },
                checkbox: {
                    required: !0
                },
                checkboxes: {
                    required: !0,
                    minlength: 1,
                    maxlength: 2
                },
                radio: {
                    required: !0
                }
            },
            invalidHandler: function(e, r) {
                var i = $("#m_form_2_msg");
                i.removeClass("m--hide").show(),
                mApp.scrollTo(i, -200)
            },
            submitHandler: function(e) {}
        })
    };
    return {
        init: function() {
            e(),
            r()
        }
    }
} ();
jQuery(document).ready(function() {
    FormControls.init()
});