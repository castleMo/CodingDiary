 const mergeTwoLists = (l1, l2) => {
    if (!l1) return l2;
    if (!l2) return l1;
        
    let result;
    if(l1.val < l2.val) {
        result = l1;
        result.next = mergeTwoLists(l1.next, l2);
    } else {
        result = l2;
        result.next = mergeTwoLists(l1, l2.next);
    }
    
    return result;
};