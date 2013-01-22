<?xml version="1.0" encoding="UTF-8" ?>
<Module>
  <ModulePrefs title="Feed Test" height="100">
  </ModulePrefs>
  <Content type="html">
  <![CDATA[
    <style> #content_div {font-size: 80%;  margin: 3px; background-color: #FFFFFF; line-height: 120%; }
    a { text-decoration: none;}
    </style>
     
    <script type="text/javascript">
    
      var mylist = "";
      var flag = 0;
    
      function set_content(content)
      {
        // var mylist= ""
        for(var i in content.Entry)
        {
          mylist += '<a href="' + _hesc(content.Entry[i].Link) + '">'
          mylist += _hesc(content.Entry[i].Title) + '</a><br/>';
        }
        setContent(mylist);
      }

      function addToList (form)
      {
        mylist = "";
        var input = _trim(form.inputbox.value);
        if (input == "")
        {
          return;
        }
        mylist += "<div style='padding-left: 5px;background-color: #E6FFE6; font-family:Arial, Helvetica;'>" +input + "</div>";
        _IG_FetchFeedAsJSON(input, set_content, 9, false);
        setContent(mylist);
      }
      function clearList(form)
      {
        setContent("");
      }

      function setContent(html) 
      {
        document.getElementById('content_div').innerHTML = html;
        gadgets.window.adjustHeight();
      }
    </script>

    <FORM NAME="myform" ACTION="" METHOD="GET"><BR>
      <INPUT TYPE="text" NAME="inputbox" VALUE="https://news.google.com/news/popular?hl=ja&ie=UTF-8&oe=UTF-8&output=rss&topic=po">
      <INPUT TYPE="button" NAME="button" Value="Add" onClick="addToList(this.form)">
      <INPUT TYPE="button" NAME="button2" Value="Clear" onClick="clearList(this.form)">
    </FORM>
    <div id="content_div"></div>
  ]]>
  </Content>
</Module>
