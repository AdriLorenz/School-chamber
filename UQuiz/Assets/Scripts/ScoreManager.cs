using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ScoreManager : MonoBehaviour
{
    public static int scoreValue = 0;
    private Text score;
    
    void Start()
    {
        score = GetComponent<Text>();
    }

    
    void Update()
    {
        score.text = "Score: " + scoreValue;

        if (scoreValue < 0) {
            scoreValue = 0;
        } 
    }
}
