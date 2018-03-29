var LayoutBuilder = function() {
    var e = function() {
        $("#builder_export_html").click(function(e) {
            e.preventDefault();
            var t = $(this);
            $("#builder_export").addClass("m-loader m-loader--light m-loader--right").find("> span > span").text("Exporting...").closest(".m-form__actions").find(".btn").prop("disabled", !0),
            $("<iframe/>").attr({
                src: "index.php?builder_export_html&demo=" + $(t).data("demo"),
                style: "visibility:hidden;display:none"
            }).ready(function() {
                $.notify({
                    title: "Export HTML Version Layout",
                    message: "HTML version exported."
                },
                {
                    type: "success"
                }),
                $("#builder_export").removeClass("m-loader m-loader--light m-loader--right").find("> span > span").text("Export").closest(".m-form__actions").find(".btn").prop("disabled", !1)
            }).appendTo(t)
        })
    },
    t = function() {
        $("#builder_export_html_static").click(function(e) {
            e.preventDefault();
            var t = $(this);
            $("#builder_export").addClass("m-loader m-loader--light m-loader--right").find("> span > span").text("Exporting...").closest(".m-form__actions").find(".btn").prop("disabled", !0),
            $.notify({
                title: "Generate HTML Static Version",
                message: "Processes started and it may take a several seconds..."
            }),
            $.ajax("index.php?demo=" + $(t).data("demo"), {
                method: "POST",
                data: {
                    builder_export_html_static: 1,
                    demo: $(t).data("demo")
                }
            }).done(function(e) {
                $.notify({
                    title: "Generate HTML Static Version",
                    message: "Static HTML has been updated with current configured layout."
                },
                {
                    type: "success"
                })
            }).always(function() {
                $("#builder_export").removeClass("m-loader m-loader--light m-loader--right").find("> span > span").text("Export").closest(".m-form__actions").find(".btn").prop("disabled", !1)
            })
        })
    },
    a = function() {
        $("#builder_export_angular").click(function(e) {
            e.preventDefault();
            var t = $(this);
            $("#builder_export").addClass("m-loader m-loader--light m-loader--right").find("> span > span").text("Exporting...").closest(".m-form__actions").find(".btn").prop("disabled", !0),
            $.notify({
                title: "Generate Angular Version Layout",
                message: "Processes started and it may take a several seconds..."
            }),
            $.ajax("index.php?demo=" + $(t).data("demo"), {
                method: "POST",
                data: {
                    builder_export_angular: 1,
                    demo: $(t).data("demo")
                }
            }).done(function(e) {
                $.notify({
                    title: "Generate Angular Version Layout",
                    message: "Angular App has been updated with current configured layout. To view it please run the angular app."
                },
                {
                    type: "success"
                })
            }).always(function() {
                $("#builder_export").removeClass("m-loader m-loader--light m-loader--right").find("> span > span").text("Export").closest(".m-form__actions").find(".btn").prop("disabled", !1)
            })
        })
    },
    i = function() {
        $('[name="builder_submit"]').click(function(e) {
            e.preventDefault();
            var t = $(this);
            $(t).addClass("m-loader m-loader--light m-loader--right").closest(".m-form__actions").find(".btn").prop("disabled", !0),
            $.ajax("index.php?demo=" + $(t).data("demo"), {
                method: "POST",
                data: $("[name]").serialize()
            }).done(function(e) {
                $.notify({
                    title: "Preview updated",
                    message: "Preview has been updated with current configured layout."
                },
                {
                    type: "success"
                })
            }).always(function() {
                setTimeout(function() {
                    location.reload()
                },
                600)
            })
        })
    },
    n = function() {
        $('[name="builder_reset"]').click(function(e) {
            e.preventDefault();
            var t = $(this);
            $(t).addClass("m-loader m-loader--primary m-loader--right").closest(".m-form__actions").find(".btn").prop("disabled", !0),
            $.ajax("index.php?demo=" + $(t).data("demo"), {
                method: "POST",
                data: {
                    builder_reset: 1,
                    demo: $(t).data("demo")
                }
            }).done(function(e) {}).always(function() {
                location.reload()
            })
        })
    },
    r = function() {
        $('[href^="#m_builder_"]').click(function(e) {
            var t = $(this).attr("href"),
            a = $('[name="builder_submit"]'),
            i = $('[name="builder[tab]"]');
            0 === $(i).length ? $("<input/>").attr("type", "hidden").attr("name", "builder[tab]").val(t).insertBefore(a) : $(i).val(t)
        }).each(function() {
            if ($(this).hasClass("active")) {
                var e = $(this).attr("href"),
                t = $('[name="builder_submit"]'),
                a = $('[name="builder[tab]"]');
                0 === $(a).length ? $("<input/>").attr("type", "hidden").attr("name", "builder[tab]").val(e).insertBefore(t) : $(a).val(e)
            }
        })
    },
    o = function() {
        r(),
        e(),
        a(),
        t(),
        i(),
        n()
    };
    return {
        init: function() {
            o()
        }
    }
} ();
jQuery(document).ready(function() {
    LayoutBuilder.init()
});