declare namespace global {
    class AbstractAjaxProcessor {
        initialize(request?: any, responseXML?: any, gc?: any);
        process();
        newItem(name?: any);
        getParameter(name?: any);
        getDocument();
        getRootElement();
        getName();
        getValue();
        getType();
        getChars();
        setAnswer(value?: any);
        setError(error?: any);
    }
}

