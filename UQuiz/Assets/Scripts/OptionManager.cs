using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class OptionManager : MonoBehaviour
{
    public GameObject continuous;
    public GameObject teleport;
    void Start()
    {
        if (MenuManager.movement != "Continuous") {
            Debug.Log(MenuManager.movement);
            continuous.gameObject.SetActive(false);
        } else {
            teleport.gameObject.SetActive(false);
            continuous.gameObject.SetActive(true);
        }
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
