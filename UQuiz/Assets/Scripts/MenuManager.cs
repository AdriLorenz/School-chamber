using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class MenuManager : MonoBehaviour
{
    public Dropdown movementDropdown;

    public static string movement;

    public void StartGame() {
        SceneManager.LoadScene("Level_1");
    }

    void Start() {
        
    }

    // Update is called once per frame
    void Update()
    {
        movement = movementDropdown.options[movementDropdown.value].text;
    }
}

