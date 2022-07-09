function createCard(imgPATH, headerText, parentID) {
    let newdiv = document.createElement('div');
    console.log(getComputedStyle(newdiv))
    newdiv.classList = 'col-12 col-sm-6 col-lg-4 card text-bg-dark mb-4';

    let newimg = document.createElement('img');
    newimg.alt = 'not found';
    newimg.classList = 'card-img-top';
    newimg.src = imgPATH;

    let headerDiv = document.createElement('div');
    headerDiv.classList = 'card-body text-center';

    let newheader = document.createElement('h5');
    newheader.classList = 'card-title';

    newheader.appendChild(document.createTextNode(headerText));
    headerDiv.appendChild(newheader);
    newdiv.appendChild(newimg);
    newdiv.appendChild(headerDiv);

    document.querySelector(`#${parentID}`).appendChild(newdiv);

}


for(let i = 0; i < present_boxes.length; i++) {
    parentel = make_element(present_boxes[i].type, "", present_boxes[i].classes)
    for(let y = 0; y < present_boxes[i].inner_child_count; y++) {
        code = "present_boxes["+ i +"].inner_child_" + y.toString()
        type = "present_boxes["+ i +"].inner_child_" + y.toString() + ".type"
        classes = "present_boxes["+ i +"].inner_child_" + y.toString() + ".classes"
        p_element = make_element(eval(type), "", eval(classes))
        for(let z = 0; z < eval(code).inner_child_count; z++) {
            code2 = "present_boxes["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString()
            type = "present_boxes["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".type"
            classes = "present_boxes["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".classes"
            p2_element = make_element(eval(type), "", eval(classes))
            for(let w = 0; w < eval(code2).inner_child_count; w++) {
                code3 = "present_boxes["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_" + w.toString()
                type = "present_boxes["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_"+w.toString() +".type"
                propertys = "present_boxes["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_"+ w.toString()+ ".propertys"
                p3_element = pclid(eval(type), eval(propertys))
                for(let q = 0; q < eval(code).inner_child_count; q++) {
                    code3 = "present_boxes["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_" + w.toString() + q.toString()
                    type = "present_boxes["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_"+w.toString() +  ".inner_child_"+ q.toString() +".type"
                    propertys = "present_boxes["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_"+ w.toString()+  ".inner_child_"+ q.toString() +".propertys"
                    p4_element = pclid(eval(type), eval(propertys))
                    p3_element.appendChild(p4_element)
                }
                p2_element.appendChild(p3_element)
            }
            p_element.appendChild(p2_element)
        }
    }
    parentel.appendChild(p_element)

}
for(let i = 0; i < features.length; i++) {
    parentel = make_element(features[i].type, "", features[i].classes)
    for(let y = 0; y < features[i].inner_child_count; y++) {
        code = "features["+ i +"].inner_child_" + y.toString()
        type = "features["+ i +"].inner_child_" + y.toString() + ".type"
        classes = "features["+ i +"].inner_child_" + y.toString() + ".classes"
        p_element = make_element(eval(type), "", eval(classes))
        for(let z = 0; z < eval(code).inner_child_count; z++) {
            code2 = "features["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString()
            type = "features["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".type"
            classes = "features["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".classes"
            p2_element = make_element(eval(type), "", eval(classes))
            for(let w = 0; w < eval(code2).inner_child_count; w++) {
                code3 = "features["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_" + w.toString()
                type = "features["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_"+w.toString() +".type"
                switch(eval(type)) {
                    case "svg":       
                        propertys = "features["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_"+ w.toString()+ ".propertys"
                        p3_element = pclid(eval(type), eval(propertys))
                        p2_element.appendChild(p3_element)
                        for(let q = 0; q < eval(code3).inner_child_count; q++) {
                            code4 = "features["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_" + w.toString() + q.toString()
                            type = "features["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_"+w.toString() +  ".inner_child_"+ q.toString() +".type"
                            propertys = "features["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_"+ w.toString()+  ".inner_child_"+ q.toString() +".propertys"
                            p4_element = pclid(eval(type), eval(propertys))
                            p3_element.appendChild(p4_element)
                        }
                        break
                    case "div":
                        code3 = "features["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_" + w.toString()
                        type = "features["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_"+w.toString() +".type"
                        classes = "features["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_"+w.toString() +".classes"
                        text = "features["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_"+w.toString() +".text"
                        p4_element = make_element(eval(type), "", eval(classes))
                        p4_element.textContent = eval(text)
                        p2_element.appendChild(p4_element)
                        break
                }
            }
            p_element.appendChild(p2_element)
        }
    }
    parentel.appendChild(p_element)
}