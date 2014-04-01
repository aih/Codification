
function initAce(){
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.container.style.opacity = "";
    editor.session.setMode("ace/mode/html");
    editor.setAutoScrollEditorIntoView(true);
    editor.setOption("maxLines", 40);
};


function initTrees(){
    jQuery('#jstree_selector_div').jstree({ 'core' : {
    'data' : [
       {
         'text' : 'Title 15- Commerce and Trade',
         'state' : {
           'opened' : true,
           'selected' : true
         },
         'children' : [
           {'text' : 'Chapter 14A- AID TO SMALL BUSINESS', 
            'children' : [
                 {'text': '§ 631. Declaration of policy',
                 'children' : [
                    {'text': 'Note “Effective Date of 1997 Amendment”, Q1'},
                    {'text': 'Note “Effective Date of 1988 Amendment”'},
                    {'text': 'Note “Effective Date of 1988 Amendment”'}
                ]},
                {'text': '§ 631a. Congressional declaration of small business economic policy'},
                {'text': '§ 631b. Reports to Congress; state of small business'}
                ]
                      },
           { 'text' : 'Chapter 14B- SMALL BUSINESS INVESTMENT PROGRAM' },
           { 'text' : 'Chapter 95- MICROENTERPRISE TECHNICAL ASSISTANCE AND CAPACITY BUILDING PROGRAM' },
           { 'text' : 'Chapter 97- WOMEN\'S BUSINESS ENTERPRISE DEVELOPMENT' },
         ]
      }
    ]
} });

jQuery('#jstree_selector_div').jstree({ 'core' : {
    'data' : [
       {
         'text' : 'Title 15- Commerce and Trade',
         'state' : {
           'opened' : true,
           'selected' : true
         },
         'children' : [
           {'text' : 'Chapter 14A- AID TO SMALL BUSINESS', 
            'children' : [
                 {'text': '§ 631. Declaration of policy',
                 'children' : [
                    {'text': 'Note “Effective Date of 1997 Amendment”, Q1'},
                    {'text': 'Note “Effective Date of 1988 Amendment”'},
                    {'text': 'Note “Effective Date of 1988 Amendment”'}
                ]},
                {'text': '§ 631a. Congressional declaration of small business economic policy'},
                {'text': '§ 631b. Reports to Congress; state of small business'}
                ]
                      },
           { 'text' : 'Chapter 14B- SMALL BUSINESS INVESTMENT PROGRAM' },
           { 'text' : 'Chapter 95- MICROENTERPRISE TECHNICAL ASSISTANCE AND CAPACITY BUILDING PROGRAM' },
           { 'text' : 'Chapter 97- WOMEN\'S BUSINESS ENTERPRISE DEVELOPMENT' },
         ]
      }
    ]
} });

jQuery('#jstree_levels_div').jstree({ 'core' : {
    'data' : [
       {
         'text' : 'Title 53- SMALL BUSINESS',
         'state' : {
           'opened' : true,
           'selected' : true
         },
         'children' : [
           {'text' : 'Subtitle I—General Provisions', 
            'children' : [
                 {'text': 'Chapter 101—Declarations; Definitions; Small Business Concerns',
                 'children' : [
                    {'text': '§ 101101. Declarations'},
                    {'text': '§ 101102. Definitions'},
                    {'text': '§ 101103. Small business concerns'}
                ]},
                {'text': 'Chapter 103—Small Business Administration'},
                {'text': 'Chapter 105—Penalties'},
                {'text': 'Chapter 107—Periodic Reports'},
                {'text': 'Chapter 109—Funding'}
                ]
                      },
           { 'text' : 'Subtitle II—Loan, Contracting, and Related Assistance Programs' },
         ]
      }
    ]
} });
};


function initSpreadsheet(){
    function requiredFieldValidator(value) {
    if (value == null || value == undefined || !value.length) {
      return {valid: false, msg: "This is a required field"};
    } else {
      return {valid: true, msg: null};
    }
  }

  var grid;
   var mydata = [
    ["101101(d)(1)(A) (vi) through (xii)", "15 U.S.C. 631(f)(1)", "P.L. 85–536, § 2[2(f)(1))]", "Restated"],
    ["101101(d)(1)(A) (vi) through (xii)", "15 U.S.C. 631(f)(1)", "P.L. 85–536, § 2[2(f)(1))]", "Restated"],
    ["101101(d)(1)(A) (vi) through (xii)", "15 U.S.C. 631(f)(1)", "P.L. 85–536, § 2[2(f)(1))]", "Restated"],
    ["101101(d)(1)(A) (vi) through (xii)", "15 U.S.C. 631(f)(1)", "P.L. 85–536, § 2[2(f)(1))]", "Restated"],
    ["101101(d)(1)(A) (vi) through (xii)", "15 U.S.C. 631(f)(1)", "P.L. 85–536, § 2[2(f)(1))]", "Restated"],
    ["101101(d)(1)(A) (vi) through (xii)", "15 U.S.C. 631(f)(1)", "P.L. 85–536, § 2[2(f)(1))]", "Restated"]
  ];
   var data = [];
  var columns = [
    {id: "newUSCCitation", name: "New USC Citation", field: "newusccitation", width: 120, cssClass: "cell-title", editor: Slick.Editors.Text, validator: requiredFieldValidator},
    {id: "existingUSCCitation", name: "Existing USC Citation", field: "existingusccitation", width: 100, editor: Slick.Editors.LongText},
    {id: "P.L. Citation", name: "P.L. Citation", field: "plcitation", editor: Slick.Editors.Text},
    {id: "Disposition", name: "Disposition", field: "disposition", editor: Slick.Editors.Text},
    {id: "Explanation", name: "Explanation", field: "explanation", editor: Slick.Editors.Text},
    {id: "Recommendation", name: "Recommendation", field: "recommendation", editor: Slick.Editors.Text}
  ];
  var options = {
    editable: true,
    enableAddRow: true,
    enableCellNavigation: true,
    asyncEditorLoading: false,
    autoEdit: true 
  };

  $(function () {
    for (var i = 0; i < 5; i++) {
      var d = (data[i] = {});

      d["newusccitation"] = mydata[i][0];
      d["existingusccitation"] = mydata[i][1];
      d["plcitation"] = mydata[i][2];
      d["disposition"] = mydata[i][3];
      d["explanation"] = mydata[i][4];
    }

    grid = new Slick.Grid("#pisSpreadsheet", data, columns, options);

    grid.setSelectionModel(new Slick.CellSelectionModel());

    grid.onAddNewRow.subscribe(function (e, args) {
      var item = args.item;
      grid.invalidateRow(data.length);
      data.push(item);
      grid.updateRowCount();
      grid.render();
    });
  })
};

jQuery(function(){
 initTrees();
 initAce();
 initSpreadsheet();
})


