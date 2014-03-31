
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
     var data = [
    ["New USC Citation", "Existing USC Citation", "P.L. Citation", "Disposition", "Explanation", "Recommendation"],
    ["101101(d)(1)(A) (vi) through (xii)", "15 U.S.C. 631(f)(1)", "P.L. 85–536, § 2[2(f)(1))]", "Restated",],
    ["101101(d)(1)(A) (vi) through (xii)", "15 U.S.C. 631(f)(1)", "P.L. 85–536, § 2[2(f)(1))]", "Restated",],
    ["101101(d)(1)(A) (vi) through (xii)", "15 U.S.C. 631(f)(1)", "P.L. 85–536, § 2[2(f)(1))]", "Restated",],
    ["101101(d)(1)(A) (vi) through (xii)", "15 U.S.C. 631(f)(1)", "P.L. 85–536, § 2[2(f)(1))]", "Restated",],
    ["101101(d)(1)(A) (vi) through (xii)", "15 U.S.C. 631(f)(1)", "P.L. 85–536, § 2[2(f)(1))]", "Restated",],
    ["101101(d)(1)(A) (vi) through (xii)", "15 U.S.C. 631(f)(1)", "P.L. 85–536, § 2[2(f)(1))]", "Restated",],
  ];
  jQuery("#pisSpreadsheet").handsontable({
    data: data,
      rowHeaders: true,
      manualColumnResize: true,
      manualColumnMove: true,
    startRows: 6,
    startCols: 8
  });
  jQuery("#pisSpreadsheet .htCore").addClass('table').addClass('table-striped').addClass('table-hover').addClass('table-condensed');

};

jQuery(function(){
 initTrees();
 initAce();
 initSpreadsheet();
})


